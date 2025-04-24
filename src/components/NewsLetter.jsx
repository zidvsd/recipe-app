import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const NewsLetter = ({
  width,
  textColor,
  text = "Subscribe",
  background = "bg-custom-peach",
}) => {
  return (
    <div className="flex flex-col gap-y-2" style={{ width: `${width}%` }}>
      <div className="relative w-full">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
        <input
          type="text"
          className="w-full border p-2 pl-10 text-black border-neutral-400 rounded-md focus:outline-none placeholder:text-neutral-600"
          placeholder="Enter Your Email"
        />
      </div>
      <Link
        to={"/"}
        className={`font-semibold rounded-md py-2 subheading-text text-center ${background}`}
        style={{ color: `${textColor}` }}
      >
        {text}
      </Link>
    </div>
  );
};

export default NewsLetter;
