import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
const SingleBlogPage = () => {
  const { meals, loading, error } = useContext(RecipeContext);

  const { id } = useParams();
  console.log(id);

  return <div></div>;
};

export default SingleBlogPage;
