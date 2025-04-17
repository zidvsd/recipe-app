import React from "react";
import { Link } from "react-router-dom";
const SignUpButton = () => {
  return (
    <>
      <Link to={"sign-in"}>
        <button className="px-8 cursor-pointer py-2 rounded-md bg-custom-peach text-white">
          <h1 className="heading-text "> Sign up</h1>
        </button>
      </Link>
    </>
  );
};

export default SignUpButton;
