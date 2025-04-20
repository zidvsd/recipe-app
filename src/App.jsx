import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useContext } from "react";
import { RecipeProvider } from "./context/RecipeProvider";
import { BlogProvider } from "./context/BlogProvider";
const App = () => {
  return (
    <>
      <RecipeProvider>
        <BlogProvider>
          <AppRoutes />
        </BlogProvider>
      </RecipeProvider>
    </>
  );
};

export default App;
