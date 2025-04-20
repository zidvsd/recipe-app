import React from "react";
import ThumbnailList from "../../components/ThumbnailList";
import SectionHeader from "../../components/SectionHeader";
const ExploreSection = () => {
  return (
    <>
      <SectionHeader title={"Explore Recipes"} linkPath={"/recipe"} />
      <ThumbnailList start={6} end={12} />
    </>
  );
};

export default ExploreSection;
