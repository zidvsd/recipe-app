import React, { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  // Use an async function inside useEffect
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/data.json"); // Fetch the data from the public folder
        const data = await response.json(); // Parse the response as JSON
        setBlogs(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error loading blog data:", error); // Log any errors
      }
    };

    fetchBlogs(); // Call the async function
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};

export default BlogProvider;
