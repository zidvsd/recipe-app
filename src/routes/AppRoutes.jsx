import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout.jsx";
import { lazy, Suspense } from "react";
import NotFound from "../components/NotFound";
import { h1 } from "framer-motion/client";
const AboutPage = lazy(() => import("../pages/AboutPage.jsx"));
const BlogPage = lazy(() => import("../pages/BlogPage.jsx"));
const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const LoginPage = lazy(() => import("../pages/LoginPage.jsx"));
const SignupPage = lazy(() => import("../pages/SignupPage.jsx"));
const RecipePage = lazy(() => import("../pages/RecipePage.jsx"));
const CategoryPage = lazy(() => import("../pages/CategoryPage.jsx"));
const SingleRecipePage = lazy(() => import("../pages/SingleRecipePage.jsx"));
const SingleBlogPage = lazy(() => import("../pages/SingleBlogPage.jsx"));
const SingleCategoryPage = lazy(
  () => import("../pages/SingleCategoryPage.jsx"),
);
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading....</h1>}>
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
              <Route path="category" element={<CategoryPage />} />
              <Route path="category/:id" element={<SingleCategoryPage />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="signin" element={<SignupPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
