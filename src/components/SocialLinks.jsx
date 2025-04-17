import React from "react";
import { Link } from "react-router-dom";
import {
  facebook,
  instagram,
  pinterest,
  twitter,
  tiktok,
} from "../assets/icons/index";
const SocialLinks = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-6 ">
      <Link to={""}>
        <img src={tiktok} className="size-6" alt="Tiktok" />
      </Link>
      <Link to={""}>
        <img src={twitter} className="size-6" alt="Twitter" />
      </Link>
      <Link to={""}>
        <img src={facebook} className="size-6" alt="Facebook" />
      </Link>
      <Link to={""}>
        <img src={instagram} className="size-6" alt="Instagram" />
      </Link>
      <Link to={""}>
        <img src={pinterest} className="size-6" alt="Pinterest" />
      </Link>
    </div>
  );
};

export default SocialLinks;
