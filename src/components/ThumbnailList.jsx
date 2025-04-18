import React from "react";
import { useContext, useState } from "react";
import { data, Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";
import Loading from "./Loading";
import { Star } from "lucide-react";
import { Bookmark } from "lucide-react";
const ThumbnailList = ({ start = 0, end = 5 }) => {
  const [favorite, setFavorite] = useState({});
  const { meals, loading, error } = useContext(RecipeContext);
  const toggleFavorite = (id) => {
    setFavorite((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="mx-auto custom-container grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* meal card */}
      <Loading loading={loading} error={error} data={meals}>
        {meals.length !== 0
          ? meals.slice(start, end).map((meal, index) => (
              <div
                key={meal.idMeal}
                className="w-full flex   flex-col border-neutral-300 rounded-md border relative"
              >
                {/* meal thumbnail */}

                <img
                  src={meal.strMealThumb}
                  className="w-full object-cover rounded-tr-md rounded-tl-md"
                  alt=""
                />
                {/* bookmark */}
                <div className="bg-white py-1 px-2 rounded-md absolute top-4 right-4">
                  <Bookmark
                    className={
                      favorite[meal.idMeal]
                        ? "fill-honey-yellow text-honey-yellow cursor-pointer"
                        : "text-black fill-none cursor-pointer"
                    }
                    onClick={() => toggleFavorite(meal.idMeal)}
                  />
                </div>
                {/* meal rating and name */}
                <div className="flex flex-row gap-y-2 p-4">
                  {/* stars */}

                  <p className="font-roboto font-semibold text-xl">
                    {meal.strMeal}
                  </p>
                </div>
              </div>
            ))
          : ""}
      </Loading>
    </div>
  );
};

export default ThumbnailList;
