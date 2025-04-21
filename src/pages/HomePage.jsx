import React from "react";
import HeroSection from "../sections/home/HeroSection";
import ShareSection from "../sections/home/ShareSection";
import TrendingSection from "../sections/home/TrendingSection";
import BlogSection from "../sections/home/BlogSection";
import ExploreSection from "../sections/home/ExploreSection";
import CTASection from "../sections/home/CTASection";
import PopularSection from "../sections/home/PopularSection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ShareSection />
      <TrendingSection />
      <BlogSection />
      <ExploreSection />
      <CTASection />
      <PopularSection />
    </>
  );
};

export default HomePage;
