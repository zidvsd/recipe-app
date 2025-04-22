import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  AboutPage,
  AddRecipe,
  BlogPage,
  HomePage,
  LoginPage,
  PopularCategoryPage,
  RecipePage,
  SignupPage,
  SingleBlogPage,
  SingleRecipePage,
} from "../pages/index.js";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="recipe" element={<RecipePage />} />
            <Route path="recipe/:id" element={<SingleRecipePage />} />
            <Route path="blog/:slug" element={<SingleBlogPage />} />
            <Route path="add-recipe" element={<AddRecipe />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-in" element={<SignupPage />} />
            <Route path="popular" element={<PopularCategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
