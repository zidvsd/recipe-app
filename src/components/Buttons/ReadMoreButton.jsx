import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const ReadMoreButton = ({ linkPath }) => {
  return (
    <Link
      to={linkPath || "#hero-section"}
      className="w-fit rounded-lg flex flex-row  text-white bg-custom-peach px-8 py-2 gap-x-4"
    >
      <span className="heading-text text-md lg:text-xl">Read More</span>
      <ArrowRight />
    </Link>
  );
};

export default ReadMoreButton;
