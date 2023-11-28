import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./topslider.scss";
import useFetch from "../../hooks/useFetch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSlider = () => {
  const { data, loading, error } = useFetch(`/sliders?populate=*`);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 11,
  };

  return (
    <div className="slider">
      <div className="imageContainer">
        <Slider {...settings}>
          {data &&
            data.slice().map((item, index) => (
              <div key={index} className="imageItem">
                <img
                  src={`${process.env.REACT_APP_UPLOAD_URL}${item.attributes?.img?.data?.attributes?.url}`}
                  alt={`Image ${index}`}
                />
                <div className="caption">{item.attributes.title}</div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopSlider;
