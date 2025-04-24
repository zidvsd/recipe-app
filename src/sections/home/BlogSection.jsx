import React from "react";
import { Link } from "react-router-dom";
import BlogList from "../../components/BlogList";
import SectionHeader from "../../components/SectionHeader";
import SlideInWhenVisible from "../../components/animations/SlideInWhenVisible";
const BlogSection = () => {
  return (
    <SlideInWhenVisible>
      <section id="blog-section" className="custom-container mx-auto ">
        <SectionHeader
          title={"Blog"}
          linkPath={"/blog"}
          viewMore={"View More"}
        />
        <BlogList />
      </section>
    </SlideInWhenVisible>
  );
};

export default BlogSection;
