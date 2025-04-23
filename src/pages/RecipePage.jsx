import React from "react";
import { useParams } from "react-router-dom";
import ThumbnailList from "../components/ThumbnailList";
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";
const RecipePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  return (
    <div>
      <SectionHeader title={"Recipes"} />
      <ThumbnailList start={0} end={25} />
    </div>
  );
};

export default RecipePage;
