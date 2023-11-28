import React from "react";
import "./home.scss";

import {TopSlider, Offer, Categories, ProductsSlider} from "../../components";

const Home = () => {
  return (
    <div className="home">
      <TopSlider />
      <Offer />
      <Categories />
      <ProductsSlider type={"Çok Satan"} />
      <ProductsSlider type={"Yıldızlı"} />
    </div>
  );
};

export default Home;
