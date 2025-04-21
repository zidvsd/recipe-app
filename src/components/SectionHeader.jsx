import React from "react";
import { Link } from "react-router-dom";
const SectionHeader = ({ title, linkPath, viewMore }) => {
  return (
    <header className="flex justify-between custom-container mx-auto ">
      <h1 className="heading-text heading-size">{title}</h1>
      <Link
        to={linkPath}
        className="heading-hover text-custom-peach heading-text text-xl hidden md:block "
      >
        {viewMore}
      </Link>
    </header>
  );
};

export default SectionHeader;
