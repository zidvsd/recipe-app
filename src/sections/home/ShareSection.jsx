import React, { useContext } from "react";
import { Link } from "react-router-dom";
import share from "../../assets/images/thumbnails/taking-picture.jpeg";
import CreateRecipeButton from "../../components/Buttons/CreateRecipeButton";

const ShareSection = () => {
  return (
    <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-2 w-full items-center justify-between gap-y-8 md:gap-y-0">
      <img
        src={share}
        className="object-cover w-full md:w-[100%]"
        alt="Share your recipes"
      />
      <article className="flex flex-col gap-y-10 items-center justify-center text-center">
        <h1 className="heading-text  heading-size ">Share Your Recipes</h1>
        <p className="2xl:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
          fermentum magna. Integer a tellus quis metus fermentum sagittis. Nulla
          fermentum dolor et condimentum tristique.
        </p>
        <CreateRecipeButton />
      </article>
    </div>
  );
};

export default ShareSection;
