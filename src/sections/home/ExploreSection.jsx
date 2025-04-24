import React from "react";
import ThumbnailList from "../../components/ThumbnailList";
import SectionHeader from "../../components/SectionHeader";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import FadeInWhenVisible from "../../components/animations/FadeInWhenVisible.jsx";
const ExploreSection = () => {
  const { meals } = useContext(RecipeContext);
  return (
    <FadeInWhenVisible>
      <section id="explore-section">
        <SectionHeader
          title={"Explore Recipes"}
          linkPath={"/recipe"}
          viewMore={"View More"}
        />
        <ThumbnailList items={meals.slice(0, 6)} />
      </section>
    </FadeInWhenVisible>
  );
};

export default ExploreSection;
