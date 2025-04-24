import React from "react";
import BlogList from "../components/BlogList";
import BlogHeroCard from "../components/BlogHeroCard";
import CTASidebar from "../components/CTASidebar";
import SlideInWhenVisible from "../components/animations/SlideInWhenVisible";
const BlogPage = () => {
  return (
    <SlideInWhenVisible>
      <BlogHeroCard limit={300} />
      <BlogList limit={200} start={1} end={5} />
    </SlideInWhenVisible>
  );
};

export default BlogPage;
