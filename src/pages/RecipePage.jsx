import React from "react";
import { useParams } from "react-router-dom";
import ThumbnailList from "../components/ThumbnailList";
import SectionHeader from "../components/SectionHeader";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import Pagination from "../components/Pagination";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible.jsx";
const RecipePage = () => {
  const { meals } = useContext(RecipeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = meals.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(meals.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <FadeInWhenVisible>
      <ThumbnailList
        items={currentItems}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
      />
      <Pagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
      />
    </FadeInWhenVisible>
  );
};

export default RecipePage;
