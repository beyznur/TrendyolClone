import "./app.scss";
import React from 'react';
import { BrowserRouter, Route, Outlet } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Layout = () => {

  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
      <BrowserRouter >
      <ScrollToTop />
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
