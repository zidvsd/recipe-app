import { Ear } from "lucide-react";
import { RecipeContext } from "../context/RecipeProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlTextHandler } from "../utils/urlTextHandler";
const PopularList = () => {
  const [uniqueMeals, setUniqueMeals] = useState([]);
  const { meals, loading, error } = useContext(RecipeContext);
  const getUniqueCategoryMeals = (meals) => {
    const categoryMap = new Map();
    meals.forEach((meal) => {
      if (meal.strCategory && !categoryMap.has(meal.strCategory)) {
        categoryMap.set(meal.strCategory, meal);
      }
    });
    const uniqueMeals = Array.from(categoryMap.values());
    console.log(uniqueMeals);
    return uniqueMeals;
  };
  useEffect(() => {
    if (!loading && meals.length > 0) {
      const unique = getUniqueCategoryMeals(meals);
      setUniqueMeals(unique);
    }
  }, [meals, loading]);
  return (
    <div className="grid-cols-2 gap-12 grid md:grid-cols-3 lg:grid-cols-4 mx-auto custom-container">
      {uniqueMeals.map((meal, index) => (
        <div key={index} className="flex flex-col items-center gap-y-4">
          <Link to={`/popular`}>
            <img
              src={meal.strMealThumb}
              className=" rounded-full object-cover heading-hover"
              alt="meal-thumbnail"
            />
          </Link>
          <h1 className="heading-text text-xl">{meal.strCategory}</h1>
        </div>
      ))}
    </div>
  );
};

export default PopularList;
