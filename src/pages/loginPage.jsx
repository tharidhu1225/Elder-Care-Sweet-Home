import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  function login() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.user == null) {
          toast.error(res.data.message);
          return;
        }
        toast.success("Login success");
        localStorage.setItem("token", res.data.token);
        if (res.data.user.type === "admin") {
          window.location.href = "/TN";
        } else {
          window.location.href = "/";
        }
      });
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cinnamoncare.com/wp-content/uploads/2019/06/2.jpg')",
      }}
    >
      <div className="w-full max-w-md p-8 bg-gray-400 bg-opacity-80 rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
        <h2 className="mb-6 text-3xl font-bold text-center text-white tracking-wider">
          Elder Care Sweet Home
        </h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              User Name
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full p-3 text-white bg-gray-700 bg-opacity-60 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your User Name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="w-full p-3 text-white bg-gray-700 bg-opacity-60 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <button
            type="button"
            className="w-full px-4 py-3 font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={login}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
