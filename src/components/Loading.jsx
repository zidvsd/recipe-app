import React from "react";
import RecipeProvider from "../context/RecipeProvider";
const Loading = ({ loading, error, data, children }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <p>Something went wrong...</p>;
  }
  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }
  return <>{children}</>;
};

export default Loading;
