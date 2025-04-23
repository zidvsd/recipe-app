import React from "react";
import { Link } from "react-router-dom";
import BlogList from "../../components/BlogList";
import SectionHeader from "../../components/SectionHeader";
const BlogSection = () => {
  return (
    <section id="blog-section" className="custom-container mx-auto ">
      <SectionHeader title={"Blog"} linkPath={"/blog"} viewMore={"View More"} />
      <BlogList />
    </section>
  );
};

export default BlogSection;
