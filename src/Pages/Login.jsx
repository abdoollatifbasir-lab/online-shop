import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login,user } = useAuth();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password },
      );
      console.log(response);
      login(response.data.access_token);
    } catch (error) {
      console.log(error);

      setError(error);
    }
  };
  if(user){
    return <Navigate to={"/"}/>
  }
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">Login</h1>
        {error && (
          <div className="bg-red-50 border-red-500 text-red-700 px-4 py-3 rounded mb-4">
            {error.message}
            <br />
            {error?.response?.data?.message}
          </div>
        )}
        <form onSubmit={handlesubmit}>
          <div className=" mb-4">
            <label htmlFor="" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Pleade Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 
                rounded-md focus:outline-0 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className=" mb-4">
            <label htmlFor="" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Pleade Enter your password "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 
                rounded-md focus:outline-0 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-400 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
