import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogProvider";
import { formatToOriginal } from "../utils/urlTextHandler";
import profilePlaceholder from "../assets/images/thumbnails/profile-placeholder.jpeg";

const SingleBlogPage = () => {
  const { blogs } = useContext(BlogContext);
  const { slug } = useParams();
  const decodedTitle = formatToOriginal(slug); // Decode the URL slug

  // Find the blog using the decoded title
  const selectedItem = blogs.find((blog) => blog.slug === slug);

  if (!selectedItem) {
    return <div>Blog not found</div>; // If no blog is found with the matching title
  }

  return (
    <div className="custom-container mx-auto">
      <h1 className="heading-text heading-size">{selectedItem.title}</h1>
      <div className="flex flex-row gap-x-4 items-center justify-start">
        <img src={profilePlaceholder} className="rounded-full size-8" alt="" />
        <p className="subheading-text">{selectedItem.date}</p>
      </div>
      {selectedItem.thumbnail && (
        <img src={selectedItem.thumbnail} alt={selectedItem.title} />
      )}
      <div>{selectedItem.content}</div>
    </div>
  );
};

export default SingleBlogPage;
