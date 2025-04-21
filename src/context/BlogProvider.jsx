import React, { createContext, useState, useEffect } from "react";
import data from "../data.json"; // adjust path if needed

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data); // Directly use imported JSON, no fetch needed
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};

export default BlogProvider;
