import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import ThumbnailList from "../components/ThumbnailList";
import Pagination from "../components/Pagination";
const SingleCategoryPage = () => {
  const { meals, loading, error } = useContext(RecipeContext);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!loading) {
      const mealCategory = meals.filter(
        (meal) => meal.strCategory.toLowerCase() === id.toLowerCase(),
      );
      setFilteredMeals(mealCategory);
      console.log(mealCategory);
    }
  }, [meals, loading, id]);

  return (
    <div>
      <ThumbnailList items={filteredMeals} />
      <Pagination />
    </div>
  );
};

export default SingleCategoryPage;
