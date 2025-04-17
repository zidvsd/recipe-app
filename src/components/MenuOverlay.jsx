import React from "react";
import { X } from "lucide-react";
const MenuOverlay = ({ menuSection, setMenuSection }) => {
  return (
    <div className="fixed inset-0 bg-custom-peach bg-opacity-50 z-50 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-6 subheading-text font-bold text-white text-2xl">
        <button
          className="text-white cursor-pointer text-3xl absolute top-[3%] right-[3%]"
          onClick={() => setMenuSection(false)}
        >
          <X size={36} />
        </button>
        <a href="/">Home</a>
        <a href="/recipe">Recipe</a>
        <a href="/add-recipe">Add Recipe</a>
        <a href="/blog">Blog</a>
        <a href="/about">About Us</a>
      </div>
    </div>
  );
};

export default MenuOverlay;
