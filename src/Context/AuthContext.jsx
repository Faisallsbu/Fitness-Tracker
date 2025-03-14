import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../supabase-client";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null); // ✅ Correct state initialization

  // Signup
  const Signup = async (email, password, username) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.toLowerCase(),
        password: password,
        options: {
          data: { username }, // Save username separately
        },
      });

      if (error) {
        console.error("Error in Signup: ", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, error: "An unexpected error occurred" };
    }
  };

  // Signin
  const Signin = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });

      if (error) {
        console.error("Error in Signin: ", error);
        return { success: false, error };
      }

      setSession(data.session); // ✅ Fixed issue
      return { success: true, data };
    } catch (error) {
      console.log("Unexpected Error During Sign in: ", error.message);
      return { success: false, error: "An unexpected error occurred. Try again." };
    }
  };

  // Signout
  const SignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error);
      } else {
        setSession(data.session);
      }
    };

    getSession(); // Fetch initial session

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup function to unsubscribe on unmount
    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, setSession, Signup, Signin, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
