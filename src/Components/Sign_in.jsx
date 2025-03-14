import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth }  from "../Context/AuthContext";

const Sign_in = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ Define the loading state

  const { Signin } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Start loading before making request

    try {
      const { error } = await Signin(email, password);
      if (error) {
        setError(error.message);
        setTimeout(() => setError(null), 3000);
      } else {
        navigate("/dashboard"); // Redirect on success
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Sign-in Error:", err);
    } finally {
      setLoading(false); // Reset loading after login attempt
    }
  };

  return (
    <div className="bg-[url(./assets/imrs.webp)] w-[100vw] h-[100vh] bg-cover bg-center flex flex-col items-center justify-center">
      <form onSubmit={handleSignIn} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold pb-2 text-center">Sign in today!</h2>
        <p className="text-center">
          Don't have an account yet? <Link to="/signup" className="text-blue-500 underline">Sign up</Link>
        </p>

        <div className="flex flex-col py-4">
          <label htmlFor="Email" className="text-gray-700 font-semibold">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-3 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="flex flex-col py-4">
          <label htmlFor="Password" className="text-gray-700 font-semibold">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-3 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>

        {error && <p className="text-red-500 text-center pt-2">{error}</p>}

        <button 
          type="submit" 
          disabled={loading} 
          className={`w-full p-3 mt-4 text-white font-semibold rounded-lg ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} transition duration-300`}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Sign_in;
