import React from "react";
import logo from "/favicon.png";
import { Link } from "react-router-dom";
const Logo = ({ size = 4, textSize = "text-3xl" }) => {
  return (
    <Link to={"/"} className="flex flex-row gap-x-2 items-center">
      <img
        src={logo}
        style={{ width: `${size}rem`, height: `${size}rem` }}
        alt=""
      />
      <h1
        className={`select-none heading-text ${textSize} text-honey-yellow cursor-pointer`}
      >
        Spoon<span className="text-custom-peach">ful</span>
      </h1>
    </Link>
  );
};

export default Logo;
