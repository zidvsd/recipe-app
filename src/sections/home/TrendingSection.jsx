import React from "react";
import ThumbnailList from "../../components/ThumbnailList";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";
const TrendingSection = () => {
  return (
    <>
      <SectionHeader
        title={"Trending Recipe"}
        viewMore={"View More"}
        linkPath={"/recipe"}
      />
      <ThumbnailList start={0} end={6} vie />
    </>
  );
};

export default TrendingSection;
