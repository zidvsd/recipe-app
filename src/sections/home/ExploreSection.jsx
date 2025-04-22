import React from "react";
import ThumbnailList from "../../components/ThumbnailList";
import SectionHeader from "../../components/SectionHeader";
const ExploreSection = () => {
  return (
    <section id="explore-section">
      <SectionHeader
        title={"Explore Recipes"}
        linkPath={"/recipe"}
        viewMore={"View More"}
      />
      <ThumbnailList start={6} end={12} />
    </section>
  );
};

export default ExploreSection;
