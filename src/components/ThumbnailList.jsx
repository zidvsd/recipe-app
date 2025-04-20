import React from "react";
import { useContext, useState } from "react";
import { data, Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";
import Loading from "./Loading";
import { Star } from "lucide-react";
import { Bookmark } from "lucide-react";
import { YoutubeIcon } from "lucide-react";
import profilePlaceholder from "../assets/images/thumbnails/profile-placeholder.jpeg";
const ThumbnailList = ({ start = 0, end = 5 }) => {
  const handleText = (str) => {
    return str.replace(/%/g, "-").replace(/\s+/g, "-").toLowerCase().trim();
  };
  const [favorite, setFavorite] = useState({});
  const { meals, loading, error } = useContext(RecipeContext);
  const toggleFavorite = (id) => {
    setFavorite((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="mx-auto custom-container place-items-center grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {/* meal card */}
      <Loading loading={loading} error={error} data={meals}>
        {meals.length !== 0
          ? meals.slice(start, end).map((meal, index) => (
              <Link
                to={`/recipe/${handleText(meal.strMeal)}`}
                key={meal.idMeal}
                className="w-full   flex   flex-col border-neutral-300 rounded-md border relative"
              >
                {/* meal thumbnail */}

                <img
                  src={meal.strMealThumb}
                  className="w-full  object-cover rounded-tr-md rounded-tl-md"
                  alt=""
                />
                {/* bookmark */}
                {/* bookmark and YouTube icon container */}
                <div className="bg-white py-1 px-2 rounded-md absolute top-4 right-4 flex flex-col items-center space-y-2">
                  {/* Bookmark */}
                  <Bookmark
                    className={
                      favorite[meal.idMeal]
                        ? "fill-honey-yellow text-honey-yellow cursor-pointer "
                        : "text-black fill-none cursor-pointer hover-effect hover:text-honey-yellow"
                    }
                    onClick={() => toggleFavorite(meal.idMeal)}
                  />

                  {/* YouTube icon */}
                  {meal.strYoutube && (
                    <a
                      href={meal.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YoutubeIcon className="w-5 h-5 hover-effect text-black hover:text-red-500" />
                    </a>
                  )}
                </div>

                {/* meal rating and name */}

                <div className="flex flex-col-reverse gap-y-2 md:flex-row justify-start md:justify-between md:items-center items-start p-4">
                  {/* profile*/}
                  <div className="flex flex-row gap-x-2 items-center">
                    <img
                      className="rounded-full size-8"
                      src={profilePlaceholder}
                      alt=""
                    />
                    <h1 className="heading-text text-sm text-nowrap">
                      Mang Juan
                    </h1>
                  </div>
                  <p className="font-roboto text-sm font-semibold ">
                    {meal.strMeal}
                  </p>
                </div>
              </Link>
            ))
          : ""}
      </Loading>
    </div>
  );
};

export default ThumbnailList;
