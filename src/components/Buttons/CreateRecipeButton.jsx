import React from "react";
import { Link } from "react-router-dom";
const CreateRecipeButton = () => {
  return (
    <Link
      to={"/recipe"}
      className="rounded-md text-white font-semibold font-roboto heading-hover bg-custom-peach px-12 py-3"
    >
      Create New Recipe
    </Link>
  );
};

export default CreateRecipeButton;
