import React from "react";
import {
  MotionSection,
  MotionContainer,
  MotionHeading,
  MotionParagraph,
  MotionImage,
  MotionDiv,
  MotionLink,
} from "../components/animations/MotionComponents";
import { fadeInRight } from "../components/animations/variants";

const AboutPage = () => {
  return (
    <MotionSection className="custom-container py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image / Illustration */}
        <MotionImage
          src="/about-cooking.svg" // replace with your image or illustration
          alt="About Cooking"
          className="w-full max-w-md mx-auto"
        />

        {/* Text Content */}
        <MotionContainer
          className="space-y-6 flex-col flex  text-center items-center justify-center lg:items-start lg:justify-start"
          variant={fadeInRight}
        >
          <MotionHeading className="heading-text heading-size font-bold text-custom-peach leading-tight">
            Crafted With <span className="text-gray-800">Love</span> & Code
          </MotionHeading>

          <MotionParagraph className="text-lg text-gray-600 subheading-text">
            Welcome to{" "}
            <span className="font-semibold text-gray-800">Spoonful</span> — your
            curated collection of dishes from all over the world. Built with
            modern tech and a passion for good food.
          </MotionParagraph>

          <MotionDiv className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-inner subheading-text">
            <MotionParagraph className="text-md text-gray-700">
              <span className="heading-text font-semibold text-custom-peach">
                Built with:
              </span>{" "}
              React, Tailwind CSS, and TheMealDB API.
            </MotionParagraph>
            <MotionParagraph className="text-md text-gray-700 mt-2">
              Discover new meals, explore categories, and find your next
              favorite dish.
            </MotionParagraph>
          </MotionDiv>

          <MotionDiv className="flex gap-4 heading-text">
            <MotionLink
              target="_blank"
              href="https://github.com/zidvsd" // optional link
              className="px-4 py-2 bg-custom-peach text-white rounded-xl shadow hover:bg-opacity-90 transition"
            >
              GitHub
            </MotionLink>
            <MotionLink
              target="_blank"
              href="mailto:youremail@example.com"
              className="px-4 py-2 border-2 border-custom-peach text-custom-peach rounded-xl hover:bg-custom-peach hover:text-white transition"
            >
              Contact Me
            </MotionLink>
          </MotionDiv>
        </MotionContainer>
      </div>
    </MotionSection>
  );
};

export default AboutPage;
