import React from "react";
import BlogList from "../components/BlogList";
import BlogHeroCard from "../components/BlogHeroCard";
const BlogPage = () => {
  return (
    <>
      <BlogHeroCard limit={300} />
      <BlogList limit={200} start={1} end={5} />
    </>
  );
};

export default BlogPage;
