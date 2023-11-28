import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./productsSlider.scss";
import Card from "../../components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsSlider = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    vertical: false,
  };

  return (
    <div className="productsSlider">
      <span className="title">{type} Ürünler</span>
      <div className="imageContainer">
        <Slider {...settings}>
          {data && data.map((item) => <Card item={item} key={item.id} />)}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsSlider;
