import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useContext } from "react";
import { RecipeProvider } from "./context/RecipeProvider";
import { BlogProvider } from "./context/BlogProvider";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <RecipeProvider>
        <BlogProvider>
          <AppRoutes />
          <ToastContainer position="top-right" />
        </BlogProvider>
      </RecipeProvider>
    </>
  );
};

export default App;
