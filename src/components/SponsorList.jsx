import React from "react";
import { walmart, amazon, apple, shopee, google } from "../assets/icons";

const sponsors = {
  walmart,
  amazon,
  apple,
  shopee,
  google,
};

const SponsorList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 custom-container mx-auto">
      {Object.entries(sponsors).map(([name, icon], index) => (
        <img
          key={index}
          src={icon}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
        />
      ))}
    </div>
  );
};

export default SponsorList;
