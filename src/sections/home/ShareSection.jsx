import React, { useContext } from "react";
import { Link } from "react-router-dom";
import share from "../../assets/images/thumbnails/taking-picture.jpeg";
import CreateRecipeButton from "../../components/Buttons/CreateRecipeButton";
import { motion } from "framer-motion";

const ShareSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      id="share-section"
      className="custom-container mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-2 w-full items-center justify-between gap-y-8 md:gap-y-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.img
        src={share}
        className="object-cover w-full md:w-[100%]"
        alt="Share your recipes"
        variants={imageVariants}
      />
      <motion.article
        className="flex flex-col gap-y-10 items-center justify-center text-center"
        variants={containerVariants}
      >
        <motion.h1
          className="heading-text heading-size"
          variants={textVariants}
        >
          Share Your Recipes
        </motion.h1>
        <motion.p className="2xl:max-w-xl" variants={textVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
          fermentum magna. Integer a tellus quis metus fermentum sagittis. Nulla
          fermentum dolor et condimentum tristique.
        </motion.p>
        <motion.div variants={textVariants}>
          <CreateRecipeButton />
        </motion.div>
      </motion.article>
    </motion.section>
  );
};

export default ShareSection;
