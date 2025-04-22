import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full custom-container py-8 space-y-8 mt-12">
      {/* Top content area */}
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 md:space-y-0">
        {/* Logo and description */}
        <div className="flex flex-col gap-y-4 md:flex-1">
          <Logo />
          <p className="subheading-text text-[10px] sm:text-xs md:text-sm text-custom-white md:max-w-md">
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
              <h1 className="heading-text text-sm sm:text-base md:text-lg text-nowrap">
                Quick Links
              </h1>
              <Link
                to={"/"}
                className="subheading-text text-[10px] sm:text-xs md:text-sm text-nowrap"
              >
                Home
              </Link>
              <Link
                to={"/recipe"}
                className="subheading-text text-[10px] sm:text-xs md:text-sm text-nowrap"
              >
                Recipes
              </Link>
              <Link
                to={"/blog"}
                className="subheading-text text-[10px] sm:text-xs md:text-sm text-nowrap"
              >
                Blog
              </Link>
            </div>

            <div className="flex flex-col gap-y-4">
              <h1 className="heading-text text-sm sm:text-base md:text-lg">
                More
              </h1>
              <Link
                to={""}
                className="subheading-text text-[10px] sm:text-xs md:text-sm text-nowrap"
              >
                Share Recipe
              </Link>
              <Link
                to={"/about"}
                className="subheading-text text-[10px] sm:text-xs md:text-sm text-nowrap"
              >
                About Us
              </Link>
              <Link
                to={""}
                className="subheading-text text-[10px] sm:text-xs md:text-sm text-nowrap"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-y-4">
              <h1 className="heading-text text-sm sm:text-base md:text-lg">
                Legal
              </h1>
              <Link
                to={""}
                className="subheading-text text-[10px] sm:text-xs md:text-sm text-nowrap"
              >
                Terms of Use
              </Link>
              <Link
                to={""}
                className="subheading-text text-[10px] sm:text-xs md:text-sm text-nowrap"
              >
                Privacy & Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:flex-1 hidden lg:flex flex-col text-center justify-start">
          <h1 className="heading-text text-sm sm:text-base md:text-lg">
            Newsletter
          </h1>
          <p className="subheading-text text-[10px] sm:text-xs md:text-sm mb-2">
            Subscribe to our newsletter to get more free tips
          </p>
          <NewsLetter width={100} textColor={"#ffffff"} />
        </div>
      </div>

      {/* Mobile Social Links */}
      <div className="md:hidden">
        <SocialLinks />
      </div>

      {/* Divider */}
      <div className="w-1/2 md:w-full bg-neutral-300 h-[1px] mx-auto"></div>

      {/* Bottom section */}
      <div className="flex flex-row-reverse w-full justify-center md:justify-between items-center">
        <div className="hidden md:block">
          <SocialLinks />
        </div>
        <p className="text-center text-[10px] sm:text-xs md:text-sm text-custom-white">
          &copy; 2025 Spoonful. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
