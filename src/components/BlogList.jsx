import React from "react";
import { useContext } from "react";
import { BlogContext } from "../context/BlogProvider";
import { Link } from "react-router-dom";
import BlogCards from "./BlogCards";
const BlogList = () => {
  const handleText = (str) => {
    return str.replace(/%/g, "-").replace(/\s+/g, "-").toLowerCase().trim();
  };
  const { blogs } = useContext(BlogContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {blogs.slice(0, 2).map((blog) => (
        <Link className="" to={`/blog/${handleText(blog.title)}`} key={blog.id}>
          <BlogCards blog={blog} />
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
