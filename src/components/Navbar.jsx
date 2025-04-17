import React, { useState } from "react";
import SignUpButton from "./Buttons/SignUpButton";
import LoginButton from "./Buttons/LoginButton";
import { Menu } from "lucide-react";
import MenuOverlay from "./MenuOverlay"; // Import MenuOverlay component

const links = [
  { name: "Home", path: "/" },
  { name: "Recipe", path: "/recipe" },
  { name: "Add Recipe", path: "/add-recipe" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  const [menuSection, setMenuSection] = useState(false); // State to toggle menu visibility

  return (
    <div className="custom-container flex flex-row justify-between  items-center">
      <div className="flex flex-row gap-x-2 items-center">
        <img src="/src/assets/images/favicon.png" className="size-12" alt="" />
        <h1 className="select-none heading-text text-3xl text-honey-yellow cursor-pointer">
          Spoon<span className="text-custom-peach">ful</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden tablet-lg:flex gap-x-4 flex-row items-center font-roboto heading-text ">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path}> {link.name}</a>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="space-x-2 hidden tablet-lg:block">
        <LoginButton />
        <SignUpButton />
      </div>

      {/* Mobile Hamburger Icon */}
      <Menu
        onClick={() => setMenuSection(!menuSection)} // Toggle menu visibility
        size={36}
        className=" cursor-pointer transition duration-300 ease-in-out hover:scale-110 text-custom-peach tablet-lg:hidden"
      />

      {/* Menu Overlay */}
      {menuSection && (
        <MenuOverlay
          menuSection={menuSection}
          setMenuSection={setMenuSection}
        />
      )}
    </div>
  );
};

export default Navbar;
