import React from "react";
import { Link } from "react-router-dom";
import ThumbnailList from "../../components/ThumbnailList";
const TrendingSection = () => {
  return (
    <>
      <header className="flex justify-between custom-container mx-auto ">
        <h1 className="heading-text heading-size">Trending Recipe</h1>
        <Link
          to={"/recipe"}
          className="text-custom-peach heading-text text-xl hidden md:block "
        >
          View More
        </Link>
      </header>
      <ThumbnailList start={0} end={6} />
    </>
  );
};

export default TrendingSection;
