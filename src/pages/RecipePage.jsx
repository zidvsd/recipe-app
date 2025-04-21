import React from "react";
import { useParams } from "react-router-dom";
import ThumbnailList from "../components/ThumbnailList";
import SectionHeader from "../components/SectionHeader";
const RecipePage = () => {
  return (
    <>
      <SectionHeader title={"Recipes"} />
      <ThumbnailList start={0} end={25} />
    </>
  );
};

export default RecipePage;
