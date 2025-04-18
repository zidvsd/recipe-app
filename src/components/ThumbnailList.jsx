import React from "react";
import { useContext } from "react";
import { data, Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";
import Loading from "./Loading";
import { Star } from "lucide-react";
const ThumbnailList = ({ start = 0, end = 5 }) => {
  const { meals, loading, error } = useContext(RecipeContext);
  return (
    <div className="mx-auto custom-container grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* meal card */}
      <Loading loading={loading} error={error} data={meals}>
        {meals.length !== 0
          ? meals.slice(start, end).map((meal, index) => (
              <div
                key={index}
                className="w-full  flex flex-col border-neutral-300 rounded-md border"
              >
                {/* meal thumbnail */}

                <img
                  src={meal.strMealThumb}
                  className="w-full object-cover rounded-tr-md rounded-tl-md"
                  alt=""
                />
                {/* bookmark */}
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
