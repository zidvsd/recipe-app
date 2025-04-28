import React from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { toast } from "react-toastify"; // Add ToastContainer import
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submit behavior
    toast.success("Welcome to Spoonful!");
    nav("/");
  };

  const handleCreateAccount = () => {
    nav("/signin");
  };

  const nav = useNavigate();

  return (
    <div className="md:py-64 p-0 bg-neutral-100 min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row w-full custom-container justify-start items-center gap-y-12">
        {/* Left Hero Section */}
        <div className="flex flex-col w-full md:text-left md:items-start md:w-1/2 items-center text-center space-y-4">
          <Logo size={6} textSize={"text-5xl"} />
          <h1 className="text-3xl md:text-4xl font-poppins max-w-md md:max-w-full">
            Discover and share the flavors of the world on Spoonful.
          </h1>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col w-full md:w-1/2 items-center">
          <form className="bg-white p-6 rounded-md shadow-md w-full max-w-sm space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-peach"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-peach"
            />

            {/* Login Button */}
            <button
              onClick={handleLogin} // Ensure you prevent form submit default behavior
              type="submit"
              className="w-full p-3 bg-custom-peach cursor-pointer text-white font-semibold rounded hover:bg-custom-peach transition"
            >
              Log In
            </button>

            {/* Forgot Password */}
            <div className="text-center">
              <a href="#" className="text-sm text-neutral-400 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300"></div>

            {/* Create Account Button */}
            <button
              onClick={handleCreateAccount}
              type="button"
              className=" w-full cursor-pointer p-3 bg-lime-green text-white font-semibold rounded hover:bg-lime-green transition"
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
