import React, { Component } from "react";
import Slider from "react-slick";

import "./styles.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "/static/img/garally/front.webp";
import image2 from "/static/img/garally/back.webp";
import image3 from "/static/img/garally/lcd_front.webp";
import image4 from "/static/img/garally/lcd_back.webp";
import image5 from "/static/img/garally/lcd_impl.webp";

export default function Garally()  {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src={image1}
          alt=""
        />
      </div>
      <div>
        <img
          src={image2}
          alt=""
        />
      </div>
      <div>
        <img
          src={image3}
          alt=""
        />
      </div>
      <div>
        <img
          src={image4}
          alt=""
        />
      </div>
      <div>
        <img
          src={image5}
          alt=""
        />
      </div>
    </Slider>
  );
}