import React, { useState } from "react";
import SignUpButton from "./Buttons/SignUpButton";
import LoginButton from "./Buttons/LoginButton";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import MenuOverlay from "./MenuOverlay"; // Import MenuOverlay component
import { Link } from "react-router-dom";
export const links = [
  { name: "Home", path: "/" },
  { name: "Recipe", path: "/recipe" },
  { name: "Category", path: "/category" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  const [menuSection, setMenuSection] = useState(false); // State to toggle menu visibility

  return (
    <nav className="custom-container flex flex-row justify-between  items-center">
      {/* Desktop Menu */}
      <Logo />
      <ul className="hidden tablet-lg:flex gap-x-4 flex-row items-center font-roboto heading-text ">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="heading-hover text-custom-peach" to={link.path}>
              {" "}
              {link.name}
            </Link>
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
        className="hover-scale text-custom-peach tablet-lg:hidden"
      />

      {/* Menu Overlay */}
      {menuSection && (
        <MenuOverlay
          menuSection={menuSection}
          setMenuSection={setMenuSection}
        />
      )}
    </nav>
  );
};

export default Navbar;
