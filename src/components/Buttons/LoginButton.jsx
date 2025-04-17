import React from "react";
import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <>
      <Link to={"login"}>
        <button className="px-8 cursor-pointer py-2 rounded-md bg-custom-white ">
          <h1 className="heading-text "> Log in</h1>
        </button>
      </Link>
    </>
  );
};

export default LoginButton;
