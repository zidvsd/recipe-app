import React from "react";
import { useContext } from "react";
import { BlogContext } from "../context/BlogProvider";
import { Link } from "react-router-dom";
import BlogCards from "./BlogCards";
import { urlTextHandler } from "../utils/urlTextHandler";
const BlogList = ({ start = 0, end = 2 }) => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 custom-container mx-auto ">
      {blogs.slice(start, end).map((blog) => (
        <Link
          className=""
          to={`/blog/${urlTextHandler(blog.title)}`}
          key={blog.id}
        >
          <BlogCards blog={blog} />
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
