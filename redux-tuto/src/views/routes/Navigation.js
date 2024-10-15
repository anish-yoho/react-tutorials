import React from "react";
// import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
// const Home = lazy(() => import("../home/index"));
// const Posts = lazy(() => import("../posts/index"));
// const Products = lazy(() => import("../products/index"));
import Home from "../home";
import Products from "../products";
import Posts from "../posts";

const Navigation = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
