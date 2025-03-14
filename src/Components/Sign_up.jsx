import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth }  from "../Context/AuthContext";

const Sign_up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { Signup } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await Signup(email, password, username);
      if (error) {
        console.error("Error in Signup: ", error);
        setError("Signup failed: " + error.message);
        return;
      }

      console.log("User signed up successfully", data);
      navigate("/"); // Navigate after successful sign-up
    } catch (err) {
      console.error("Unexpected Error During Sign up: ", err.message);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
};


  return (
    <div className="bg-[url(./assets/imrs.webp)] w-[100vw] h-[100vh] bg-cover bg-center flex flex-col items-center justify-center">
      <form onSubmit={handleSignUp} className="w-[33vw] max-w-md m-auto px-10 py-20 bg-white rounded-sm ">
        <h2 className="text-2xl font-bold pb-2 text-center">Sign up today!</h2>
        <p className="text-center">
          Already have an account? <Link className="text-blue-800" to="/">Sign in</Link>
        </p>
        <div className="flex flex-col py-4">
          {/* <label htmlFor="Email">Email</label> */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 mt-2 border"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col py-2">
          {/* <label htmlFor="username">username</label> */}
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 mt-2 border"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col py-4">
          {/* <label htmlFor="Password">Password</label> */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 mt-2 border"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" disabled={loading} className="w-full mt-4 border border-white bg-blue-600 text-white py-3 ">
          Sign Up
        </button>
        {error && <p className="text-Whitetext-center pt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Sign_up;