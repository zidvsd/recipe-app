import React from "react";
import { Link, useLocation } from "react-router-dom";
import { slugify } from "../utils/urlTextHandler";
import { capitalizeWords } from "../utils/urlTextHandler";
const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="container mx-auto px-4 lg:px-12 py-2 md:py-4   max-w-[1280px] font-roboto font-semibold text-custom-peach">
      <Link to={`/`} className="heading-hover">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const path = `/${pathnames.slice(0, index + 1).join("/")}`;

        const isSlug = slugify(value) === value;
        const displayValue = isSlug
          ? decodeURIComponent(value.replace(/-/g, " "))
          : value;

        return (
          <span className="select-none" key={index}>
            {" > "}
            <Link className="heading-text heading-hover" to={path}>
              {capitalizeWords(displayValue)}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
