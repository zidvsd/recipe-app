import React from "react";
import { Link } from "react-router-dom";
import { truncateText } from "../utils/truncateText";

const BlogCards = ({ blog, limit = 70 }) => {
  return (
    <div className="  text-black border-neutral-200 border rounded-md thumbnail-zoom-hover">
      {/* Ensure image takes the full height of its container and crops if necessary */}
      <img
        className="w-full h-82 object-cover rounded-tr-md rounded-tl-md lg:h-102 "
        src={blog.thumbnail}
        alt=""
      />
      <div className="p-4 space-y-2">
        <p className="subheading-text text-md text-neutral-600">
          on {blog.date}
        </p>
        <h1 className="heading-text text-xl">{blog.title}</h1>
        <p className="subheading-text text-md">
          {truncateText(blog.content, limit)}
        </p>
      </div>
    </div>
  );
};

export default BlogCards;
