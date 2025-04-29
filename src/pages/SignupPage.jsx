import React from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const SignupPage = () => {
  const handleSignUp = () => {
    toast.success("Signed up successfully.");
  };
  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="py-12 flex flex-col items-center w-full custom-container gap-y-4">
        <Logo size={6} textSize={"text-5xl"} />

        <form className="bg-white shadow-xl w-96 border border-neutral-200 py-4 px-4 rounded-md flex flex-col space-y-3">
          <div className="text-center">
            <h1 className="text-xl font-poppins font-semibold">
              Create a new account
            </h1>
            <p className="text-sm text-neutral-600 font-montserrat">
              It's quick and easy.
            </p>
            <div className="w-full h-[1px] bg-neutral-300 my-2"></div>
          </div>

          {/* Name Fields */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 input input-bordered input-sm border border-neutral-300 rounded-md p-1 subheading-text"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 input input-bordered input-sm border border-neutral-300 rounded-md p-1 subheading-text"
            />
          </div>

          {/* Birthday */}
          <label className="text-xs text-neutral-600 font-medium mt-1 font-poppins">
            Birthday
          </label>
          <div className="flex gap-2 subheading-text">
            <select className="select select-bordered select-sm w-1/3  border border-neutral-300 rounded-md p-1">
              <option selected>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select className="select select-bordered select-sm w-1/3 border border-neutral-300 rounded-md p-1">
              {[...Array(31)].map((_, index) => (
                <option key={index} selected={index === 0}>
                  {index + 1}
                </option>
              ))}
            </select>

            <select className="select select-bordered select-sm w-1/3  border border-neutral-300 rounded-md p-1">
              {[...Array(2025 - 1905 + 1)].map((_, index) => {
                const year = 2025 - index;
                return (
                  <option key={year} selected={year === 2025}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Gender */}
          <label className="text-xs text-neutral-600 font-medium mt-1">
            Gender
          </label>
          <div className="flex gap-2 subheading-text">
            <label className="flex items-center gap-1 border border-neutral-300 rounded-md px-2 py-1 w-1/3 justify-center">
              <input
                type="radio"
                name="gender"
                className="radio radio-sm accent-custom-peach"
              />
              Female
            </label>
            <label className="flex items-center gap-1 border border-neutral-300 rounded-md px-2 py-1 w-1/3 justify-center">
              <input
                type="radio"
                name="gender"
                className="radio radio-sm accent-custom-peach"
              />
              Male
            </label>
            <label className="flex items-center gap-1 border border-neutral-300 rounded-md px-2 py-1 w-1/3 justify-center">
              <input
                type="radio"
                name="gender"
                className="radio radio-sm accent-custom-peach "
              />
              Custom
            </label>
          </div>

          {/* Email and Password */}
          <input
            type="text"
            placeholder="Mobile number or email"
            className="input input-bordered input-sm subheading-text mt-2 border border-neutral-300 rounded-md p-1"
          />
          <input
            type="password"
            placeholder="New password"
            className="input input-bordered input-sm subheading-text mt-2 border border-neutral-300 rounded-md p-1"
          />

          {/* Policy Text */}
          <p className="text-[11px] text-neutral-500 mt-1 font-poppins">
            People who use our service may have uploaded your contact
            information to Spoonful.{" "}
            <a href="#" className="text-custom-peach hover:underline">
              Learn more
            </a>
            .
          </p>
          <p className="text-[11px] text-neutral-500 font-poppins">
            By clicking Sign Up, you agree to our{" "}
            <a href="#" className="text-custom-peach hover:underline">
              Terms
            </a>
            ,{" "}
            <a href="#" className="text-custom-peach hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-custom-peach hover:underline">
              Cookies Policy
            </a>
            . You may receive SMS Notifications from us and can opt out any
            time.
          </p>

          {/* Sign Up Button */}
          <Link
            onClick={handleSignUp}
            to={"/login"}
            className="btn btn-success bg-lime-green w-fit self-center px-12 py-2 rounded-md text-white font-semibold text-sm mt-2"
          >
            Sign Up
          </Link>

          {/* Link to Login */}
          <div className="text-center mt-2">
            <Link
              to={"/login"}
              className="text-custom-peach text-sm hover:underline"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
