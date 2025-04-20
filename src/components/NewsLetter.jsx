import React from "react";
import { Link } from "react-router-dom";

const NewsLetter = ({ width, textColor }) => {
  return (
    <div className="flex flex-col gap-y-2" style={{ width: `${width}%` }}>
      <input
        type="text"
        className="w-full border p-2 pl-4 text-black border-neutral-300 rounded-md focus:outline-none placeholder:text-neutral-600"
        placeholder="Enter Your Email"
      />
      <Link
        to={"/"}
        className="font-semibold bg-custom-peach rounded-md py-2 subheading-text"
        style={{ color: `${textColor}` }}
      >
        Subscribe
      </Link>
    </div>
  );
};

export default NewsLetter;
