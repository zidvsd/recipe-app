import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SignUpButton from "../../components/Buttons/SignUpButton";
import { RecipeContext } from "../../context/RecipeProvider";
import Loading from "../../components/Loading";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { meals, loading, error } = useContext(RecipeContext);
  console.log(meals);
  console.log(loading);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="hero-section"
      className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 w-full relative"
    >
      {/* hero text */}
      <motion.div
        className="flex w-full flex-col gap-y-4 items-center justify-center text-center md:items-start md:justify-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="heading-text heading-size"
          variants={itemVariants}
        >
          Your Daily Dish A <span className="text-custom-peach">Food</span>{" "}
          Journey
        </motion.h1>

        <motion.p className="subheading-text" variants={itemVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
          fermentum magna. Integer a tellus quis metus fermentum sagittis. Nulla
          fermentum dolor et condimentum tristique.
        </motion.p>

        <motion.div variants={itemVariants}>
          <SignUpButton />
        </motion.div>

        <motion.p className="subheading-text text-sm" variants={itemVariants}>
          Do you have account? <span style={{ marginLeft: "0.5em" }}></span>
          <Link to={"/login"} className="font-bold text-custom-peach">
            Login
          </Link>
        </motion.p>
      </motion.div>

      {/* testimonial */}
      <div className="w-full hidden md:flex items-center justify-end">
        <Loading loading={loading} error={error} data={meals}>
          {meals && meals.length > 0 && (
            <motion.img
              src={meals[0].strMealThumb}
              alt={meals[0].strMeal}
              className="rounded-full shadow-lg w-full max-w-md"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          )}
        </Loading>
      </div>
    </section>
  );
};

export default HeroSection;
