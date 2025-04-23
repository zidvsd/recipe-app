import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";
import Loading from "./Loading";
import { Star, Bookmark, YoutubeIcon } from "lucide-react";
import profilePlaceholder from "../assets/images/thumbnails/profile-placeholder.jpeg";
import { slugify } from "../utils/urlTextHandler";

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
    <div className="mx-auto custom-container grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 place-items-center">
      <Loading loading={loading} error={error} data={meals}>
        {meals.length !== 0 &&
          meals.slice(start, end).map((meal) => {
            const isFavorited = favorite[meal.idMeal];
            const mealUrl = `/recipe/${slugify(meal.strMeal)}`;

            return (
              <div
                key={meal.idMeal}
                className="max-w-[400px] thumbnail-zoom-hover w-full flex flex-col border border-neutral-300 rounded-lg overflow-hidden shadow-md bg-white relative"
              >
                {/* Image */}
                <Link to={mealUrl}>
                  <img
                    src={meal.strMealThumb}
                    className="w-full h-44 object-cover "
                    alt={meal.strMeal}
                  />

                  {/* Bookmark and YouTube */}
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <div className="bg-white p-1 rounded-md shadow-md">
                      <Bookmark
                        className={
                          isFavorited
                            ? "fill-honey-yellow text-honey-yellow cursor-pointer"
                            : "text-black fill-none cursor-pointer hover-effect hover:text-honey-yellow"
                        }
                        onClick={() => toggleFavorite(meal.idMeal)}
                      />
                    </div>
                    {meal.strYoutube && (
                      <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-1 rounded-md shadow-md"
                      >
                        <YoutubeIcon className="w-5 h-5 text-black hover:text-red-500" />
                      </a>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex flex-col justify-between tablet-sm:flex-row tablet-sm:items-center items-start gap-y-2  mb-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={profilePlaceholder}
                          alt="profile"
                          className="w-6 h-6 rounded-full hover:scale-110 transition-transform"
                        />
                        <p className="text-xs  text-gray-700 font-semibold">
                          Mang Juan
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-right text-custom-peach">
                        {meal.strMeal}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-honey-yellow fill-honey-yellow"
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </Loading>
    </div>
  );
};

export default ThumbnailList;
