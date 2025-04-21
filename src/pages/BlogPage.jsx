import React from "react";
import BlogList from "../components/BlogList";
const BlogPage = () => {
  return (
    <>
      <BlogList start={0} end={5} />
    </>
  );
};

export default BlogPage;
