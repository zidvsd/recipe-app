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
    <div className="flex flex-row items-center justify-between gap-x-2 custom-container mx-auto">
      {Object.entries(sponsors).map(([name, icon], index) => (
        <img
          key={index}
          src={icon}
          alt={name}
          className="size-12 sm:size-16 md:w-20 lg:32 object-contain "
        />
      ))}
    </div>
  );
};

export default SponsorList;
