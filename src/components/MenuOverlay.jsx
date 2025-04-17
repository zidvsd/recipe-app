import React from "react";
import { X } from "lucide-react";
import { useEffect } from "react";
import { links } from "./Navbar";
import { Link } from "react-router-dom";
const MenuOverlay = ({ menuSection, setMenuSection }) => {
  const maxTabletWidth = 900;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > maxTabletWidth && menuSection) {
        setMenuSection(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuSection, setMenuSection]);

  return (
    <div className="fixed inset-0 bg-custom-peach bg-opacity-50 z-50 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-6 subheading-text font-bold text-white text-2xl">
        <button
          className="text-white cursor-pointer text-3xl absolute top-[5%] right-[3%]"
          onClick={() => setMenuSection(false)}
        >
          <X size={36} className="hover-scale" />
        </button>
        {links.map((link) => (
          <Link
            onClick={() => setMenuSection(false)}
            to={link.path}
            key={link.path}
            className="heading-hover"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
