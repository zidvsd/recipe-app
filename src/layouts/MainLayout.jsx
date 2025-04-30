import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import Blob from "../components/Blob";
import { useLocation } from "react-router-dom";
const MainLayout = ({ children }) => {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? null : <Blob />}
      <Navbar />
      <BreadCrumbs />
      <main className=" :mt-0 space-y-8 sm:space-y-12 md:space-y-16  ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
