import React from "react";
import { useParams } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible.jsx";
const CategoryPage = () => {
  return (
    <FadeInWhenVisible>
      <CategoryList />
    </FadeInWhenVisible>
  );
};

export default CategoryPage;
