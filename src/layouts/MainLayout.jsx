import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-12 :mt-0 space-y-8 sm:space-y-12 md:space-y-16  ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
