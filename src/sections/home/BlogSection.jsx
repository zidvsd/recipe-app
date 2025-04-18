import React from "react";
import { Link } from "react-router-dom";
import BlogList from "../../components/BlogList";
const BlogSection = () => {
  return (
    <>
      <header className="flex justify-between custom-container mx-auto ">
        <h1 className="heading-text heading-size">Blog</h1>
        <Link
          to={"/blog"}
          className="text-custom-peach heading-text text-xl hidden md:block "
        >
          View More
        </Link>
      </header>
      <BlogList />
    </>
  );
};

export default BlogSection;
