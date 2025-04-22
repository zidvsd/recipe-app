import Newsletter from "./NewsLetter";
import React from "react";
const CTASidebar = () => {
  return (
    <div className="bg-warm-beige text-center p-4 w-full flex flex-col gap-y-4 items-center justify-center rounded-md">
      <h1 className="heading-text text-xl text-honey-yellow">
        Stay connected with our Recipes updates
      </h1>
      <p className="subheading-text text-neutral-700">
        for the latest health tips and delicious recipes.
      </p>
      <Newsletter
        width={80}
        text="Sign up"
        textColor={"white"}
        background="bg-honey-yellow" // this is tailwind orange-400
      />
    </div>
  );
};

export default CTASidebar;
