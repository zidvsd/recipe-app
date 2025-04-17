import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full custom-container  py-8 space-y-8">
      {/* Top content area */}
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-8  md:space-y-0 ">
        {/* Logo and description */}
        <div className="flex flex-col gap-y-4 md:flex-1">
          <Logo />
          <p className="subheading-text text-xs text-custom-white md:max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        {/* Quick Links and Social Icons */}
        <div className="flex flex-col justify-between md:flex-1 w-full md:w-auto mt-8 md:mt-0">
          <div className="flex flex-row justify-between gap-x-12">
            <div className="flex flex-col gap-y-4">
              <h1 className="heading-text text-sm">Quick links</h1>
              <Link to={""} className="subheading-text text-xs text-nowrap">
                Home
              </Link>
              <Link to={""} className="subheading-text text-xs text-nowrap">
                Recipes
              </Link>
              <Link to={""} className="subheading-text text-xs text-nowrap">
                Blog
              </Link>
            </div>

            <div className="flex flex-col gap-y-4">
              <h1 className="heading-text text-sm">Quick links</h1>
              <Link to={""} className="subheading-text text-xs text-nowrap">
                Share Recipe
              </Link>
              <Link to={""} className="subheading-text text-xs text-nowrap">
                About Us
              </Link>
              <Link to={""} className="subheading-text text-xs text-nowrap">
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-y-4">
              <h1 className="heading-text text-sm">Legal</h1>
              <Link to={""} className="subheading-text text-xs text-nowrap">
                Terms of Use
              </Link>
              <Link to={""} className="subheading-text text-xs text-nowrap">
                Privacy & Cookies
              </Link>
            </div>
          </div>

          {/* Social Icons hidden in medium screens*/}
        </div>

        {/* Newsletter */}
        <div className="md:flex-1 hidden lg:block">
          <NewsLetter />
        </div>
      </div>
      <div className="md:hidden">
        <SocialLinks />
      </div>
      {/* Divider and Copyright */}
      <div className="w-1/2 md:w-full bg-neutral-300 h-[1px] mx-auto"></div>
      {/* Social icons hidden in small screens */}
      <div className="flex flex-row-reverse w-full justify-center md:justify-between items-center">
        <div className=" hidden md:block">
          <SocialLinks />
        </div>
        <p className="text-center text-xs text-custom-white">
          &copy; 2025 Spoonful. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
