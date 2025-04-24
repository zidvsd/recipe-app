import React from "react";
import ThumbnailList from "../../components/ThumbnailList";
import SectionHeader from "../../components/SectionHeader";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import { shuffleArray } from "../../utils/shuffleArray";
import FadeInWhenVisible from "../../components/animations/FadeInWhenVisible.jsx";

const TrendingSection = () => {
  const { meals } = useContext(RecipeContext);

  return (
    <FadeInWhenVisible>
      <section id="trending-section">
        <SectionHeader
          title={"Trending Recipe"}
          viewMore={"View More"}
          linkPath={"/recipe"}
        />
        <ThumbnailList items={shuffleArray(meals.slice(0, 6))} />
      </section>
    </FadeInWhenVisible>
  );
};

export default TrendingSection;
