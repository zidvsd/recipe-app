import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  AboutPage,
  BlogPage,
  HomePage,
  LoginPage,
  CategoryPage,
  RecipePage,
  SignupPage,
  SingleBlogPage,
  SingleRecipePage,
} from "../pages/index.js";
import NotFound from "../components/NotFound";
import SingleCategoryPage from "../pages/SingleCategoryPage.jsx";

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
            <Route path="blog" element={<BlogPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-in" element={<SignupPage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="category/:id" element={<SingleCategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
