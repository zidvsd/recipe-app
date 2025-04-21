import React from "react";
import { Link } from "react-router-dom";
import BlogList from "../../components/BlogList";
import SectionHeader from "../../components/SectionHeader";
const BlogSection = () => {
  return (
    <div className="custom-container mx-auto space-y-8">
      <SectionHeader title={"Blog"} linkPath={"/blog"} viewMore={"View More"} />
      <BlogList />
    </div>
  );
};

export default BlogSection;
