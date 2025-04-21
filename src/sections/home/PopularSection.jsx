import React from "react";
import PopularList from "../../components/PopularList";
import SectionHeader from "../../components/SectionHeader";
const PopularSection = () => {
  return (
    <>
      <SectionHeader
        title={"Popular Categories"}
        linkPath={"/popular"}
        viewMore={"View More"}
      />
      <PopularList />
    </>
  );
};

export default PopularSection;
