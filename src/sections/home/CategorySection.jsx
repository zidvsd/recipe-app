import React from "react";
import CategoryList from "../../components/CategoryList";
import SectionHeader from "../../components/SectionHeader";
import FadeInWhenVisible from "../../components/animations/FadeInWhenVisible.jsx";
const CategorySection = () => {
  return (
    <FadeInWhenVisible>
      <section id="category-section">
        <SectionHeader
          title={"Popular Categories"}
          linkPath={"/category"}
          viewMore={"View More"}
        />
        <CategoryList />
      </section>
    </FadeInWhenVisible>
  );
};

export default CategorySection;
