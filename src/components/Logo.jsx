import React from "react";
import logo from "/favicon.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={"/"} className="flex flex-row gap-x-2 items-center">
      <img src={logo} className="size-12" alt="" />
      <h1 className="select-none heading-text text-3xl text-honey-yellow cursor-pointer">
        Spoon<span className="text-custom-peach">ful</span>
      </h1>
    </Link>
  );
};

export default Logo;
