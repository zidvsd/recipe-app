import React from "react";

const RecipeInstructions = ({ selectedItem }) => {
  const stepsArray = selectedItem.strInstructions
    .split(".")
    .map((step) => step.trim()) // split by any kind of newline
    .filter((step) => step.trim() !== ""); // remove empty lines

  return (
    <div>
      {stepsArray.map((steps, index) => (
        <p key={index}>{steps}</p>
      ))}
    </div>
  );
};

export default RecipeInstructions;
