import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";
import { slugify } from "../utils/urlTextHandler";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible.jsx";
import BlogSidebar from "../components/BlogSidebar.jsx";
import RecipeSidebar from "../components/RecipeSidebar.jsx";
import PostMeta from "../components/PostMeta.jsx";
const SingleRecipePage = () => {
  const { slug } = useParams();
  const { meals, loading, error } = useContext(RecipeContext);
  const { id } = useParams();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!meals || meals.length === 0) return <p>No meals found.</p>;

  const selectedRecipe = meals.find((meal) => slugify(meal.strMeal) === id);

  if (!selectedRecipe) return <p>Recipe not found.</p>;

  return (
    <FadeInWhenVisible>
      <section className="custom-container mx-auto space-y-4  flex flex-col md:flex-row gap-x-4">
        <div className="w-full md:w-[70%] lg:w-[75%]">
          <PostMeta selectedItem={selectedRecipe} />
          <img
            src={selectedRecipe.strMealThumb}
            alt={selectedRecipe.strMeal}
            className="w-full rounded-lg  max-h-[42rem] object-cover"
          />
          <p className="mt-4">{selectedRecipe.strInstructions}</p>
        </div>
        <div className="flex-col space-y-4  w-full md:w-[30%] lg:wd-[25%]">
          <RecipeSidebar currentSlug={slug} />
          <BlogSidebar currentSlug={slug} />
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default SingleRecipePage;
