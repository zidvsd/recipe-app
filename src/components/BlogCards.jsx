import React from "react";
import { Link } from "react-router-dom";
const limit = 70;

const BlogCards = ({ blog }) => {
  const truncate = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className="  text-black border-neutral-300 border rounded-md">
      {/* Ensure image takes the full height of its container and crops if necessary */}
      <img
        className="w-full h-82 object-cover rounded-tr-md rounded-tl-md lg:h-102"
        src={blog.thumbnail}
        alt=""
      />
      <div className="p-4 space-y-2">
        <h1 className="heading-text text-xl">{blog.title}</h1>
        <p className="subheading-text text-md">
          {truncate(blog.content, limit)}
        </p>
      </div>
    </div>
  );
};

export default BlogCards;
