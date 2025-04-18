import React, { useState } from "react";
import { useEffect, useContext, createContext } from "react";
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        setLoading(!loading);
        setMeals(data.meals || []);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

  return (
    <RecipeContext.Provider value={{ meals, loading, error }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
