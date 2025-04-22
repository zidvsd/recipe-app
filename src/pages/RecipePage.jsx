import React from "react";
import { useParams } from "react-router-dom";
import ThumbnailList from "../components/ThumbnailList";
import SectionHeader from "../components/SectionHeader";
const RecipePage = () => {
  return (
    <div>
      <SectionHeader title={"Recipes"} />
      <ThumbnailList start={0} end={25} />
    </div>
  );
};

export default RecipePage;
