import React from "react";
import { Link } from "react-router-dom";
import SignUpButton from "../../components/Buttons/SignUpButton";
const HeroSection = () => {
  return (
    <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 w-full ">
      {/* hero text */}
      <div className="flex w-full flex-col gap-y-4 items-center justify-center text-center md:items-start md:justify-start md:text-left ">
        <h1 className="heading-text text-3xl section-heading md:text-4xl lg:text-5xl">
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
      <div className="w-full flex items-center justify-center">
        <h1></h1>
      </div>
    </div>
  );
};

export default HeroSection;
