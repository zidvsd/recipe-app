import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <img src="/src/assets/images/favicon.png" className="size-12" alt="" />
      <h1 className="select-none heading-text text-3xl text-honey-yellow cursor-pointer">
        Spoon<span className="text-custom-peach">ful</span>
      </h1>
    </div>
  );
};

export default Logo;
