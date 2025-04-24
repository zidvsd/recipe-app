import { RecipeContext } from "../context/RecipeProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlTextHandler } from "../utils/urlTextHandler";

const CategoryList = () => {
  const [uniqueMeals, setUniqueMeals] = useState([]);
  const { meals, loading } = useContext(RecipeContext);

  const getUniqueCategoryMeals = (meals) => {
    const categoryMap = new Map();
    meals.forEach((meal) => {
      if (meal.strCategory && !categoryMap.has(meal.strCategory)) {
        categoryMap.set(meal.strCategory, meal);
      }
    });
    return Array.from(categoryMap.values());
  };

  useEffect(() => {
    if (!loading && meals.length > 0) {
      const unique = getUniqueCategoryMeals(meals);
      setUniqueMeals(unique);
    }
  }, [meals, loading]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto custom-container">
      {uniqueMeals.map((meal, index) => (
        <div key={index} className="flex flex-col items-center gap-y-4">
          <Link to={`/category/${urlTextHandler(meal.strCategory)}`}>
            <img
              src={meal.strMealThumb}
              className="rounded-full object-cover heading-hover
                size-32 sm:size-40 md:size-48 lg:size-54 xl:size-62 transition-transform"
              alt="meal-thumbnail"
            />
          </Link>
          <h1 className="heading-text text-xl text-center">
            {meal.strCategory}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
