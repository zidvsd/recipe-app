import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useContext } from "react";
import { RecipeProvider } from "./context/RecipeProvider";

const App = () => {
  return (
    <>
      <RecipeProvider>
        <AppRoutes />
      </RecipeProvider>
    </>
  );
};

export default App;
