import React from "react";
import { useContext } from "react";
import { BlogContext } from "../context/BlogProvider";
import ReadMoreButton from "./Buttons/ReadMoreButton";
import { truncateText } from "../utils/truncateText";
import { urlTextHandler } from "../utils/urlTextHandler";
const BlogHeroCard = ({ limit }) => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="custom-container mx-auto  w-full ">
      <div className="border border-neutral-200 rounded-lg p-4 flex flex-col md:flex-row-reverse justify-between items-center shadow-xl md:justify-start md:items-start lg:items-center lg:justify-center">
        <div className="w-full md:w-1/2">
          <img src={blogs[0].thumbnail} alt="" />
        </div>
        <div className="w-full md:w-1/2 space-y-4 p-4">
          <p className="subheading-text text-md text-neutral-600">
            on {blogs[0].date}
          </p>
          <h1 className="heading-text heading-size text-xl">
            {blogs[0].title}
          </h1>
          <p className="subheading-text text-md">
            {truncateText(blogs[0].content, limit)}
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <ReadMoreButton
              linkPath={`/blog/${urlTextHandler(blogs[0].title)}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroCard;
