import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";
import { slugify } from "../utils/urlTextHandler";
const SingleRecipePage = () => {
  const { meals, loading, error } = useContext(RecipeContext);
  const { id } = useParams();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!meals || meals.length === 0) return <p>No meals found.</p>;

  const selectedRecipe = meals.find((meal) => slugify(meal.strMeal) === id);

  if (!selectedRecipe) return <p>Recipe not found.</p>;

  return (
    <div className="custom-container mx-auto">
      <h1 className="text-2xl font-bold">{selectedRecipe.strMeal}</h1>
      <img
        src={selectedRecipe.strMealThumb}
        alt={selectedRecipe.strMeal}
        className="w-full max-w-md rounded-lg mt-4"
      />
      <p className="mt-4">{selectedRecipe.strInstructions}</p>
    </div>
  );
};

export default SingleRecipePage;
