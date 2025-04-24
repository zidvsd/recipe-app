import { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import CTASidebar from "./CTASidebar";
import React from "react";
import { useLocation } from "react-router-dom";
import { urlTextHandler } from "../utils/urlTextHandler";
import { shuffleArray } from "../utils/shuffleArray";
import Loading from "./Loading";

const RecipeSidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const currentSlug = path.substring(path.lastIndexOf("/" + 1));
  const { meals, loading, error } = useContext(RecipeContext);

  const relatedRecipes = meals.filter((meal) => {
    const mealSlug = meal.strMeal.toLowerCase().replace(/\s+/g, "-");
    return mealSlug !== currentSlug;
  });

  // Shuffle function (Fisher-Yates)
  // Randomized related recipes
  const randomRelatedRecipes = shuffleArray(relatedRecipes).slice(0, 6);

  return (
    <aside className="w-full grid grid-cols-2 space-x-2 gap-4   place-items-start">
      <h1 className="col-span-full heading-text text-xl text-custom-peach">
        Recent Recipes
      </h1>
      <Loading loading={loading} error={error} data={randomRelatedRecipes}>
        {randomRelatedRecipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="w-full flex flex-col items-start md:items-center "
          >
            <Link
              to={`/recipe/${urlTextHandler(recipe.strMeal)}`}
              className="w-full h-full aspect-5/4"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full object-cover h-full"
              />
            </Link>
            <h1 className="heading-text text-sm">{recipe.strMeal}</h1>
          </div>
        ))}
      </Loading>
    </aside>
  );
};

export default RecipeSidebar;
