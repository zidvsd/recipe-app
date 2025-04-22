import React from "react";
import PopularList from "../../components/PopularList";
import SectionHeader from "../../components/SectionHeader";
const PopularSection = () => {
  return (
    <section id="popular-section">
      <SectionHeader
        title={"Popular Categories"}
        linkPath={"/popular"}
        viewMore={"View More"}
      />
      <PopularList />
    </section>
  );
};

export default PopularSection;
