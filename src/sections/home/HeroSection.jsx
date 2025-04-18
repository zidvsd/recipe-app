import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SignUpButton from "../../components/Buttons/SignUpButton";
import { RecipeContext } from "../../context/RecipeProvider";
import Loading from "../../components/Loading";
const HeroSection = () => {
  const { meals, loading, error } = useContext(RecipeContext);
  console.log(meals);
  console.log(loading);
  return (
    <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 w-full ">
      {/* hero text */}
      <div className="flex w-full flex-col gap-y-4 items-center justify-center text-center md:items-start md:justify-center md:text-left ">
        <h1 className="heading-text heading-size">
          Your Daily Dish A <span className="text-custom-peach"> Food</span>{" "}
          Journey
        </h1>
        <p className="subheading-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
          fermentum magna. Integer a tellus quis metus fermentum sagittis. Nulla
          fermentum dolor et condimentum tristique.
        </p>
        <SignUpButton />
        <p className="subheading-text text-sm ">
          Do you have account?
          <span style={{ marginLeft: "0.5em" }}></span>
          <Link to={"/login"} className="font-bold text-custom-peach">
            Login
          </Link>
        </p>
      </div>
      {/* testimonial */}
      <div className="w-full hidden md:flex items-center justify-end ">
        <Loading loading={loading} error={error} data={meals}>
          {meals && meals.length > 0 && (
            <img
              src={meals[0].strMealThumb}
              alt={meals[0].strMeal}
              className="rounded-full shadow-lg w-full max-w-md"
            />
          )}
        </Loading>
      </div>
    </div>
  );
};

export default HeroSection;
