"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
const Hero = () => {


  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div>
      <div className="container pt-6  lg:pt-0">
        <Slider {...settings}>
          {
            slideData?.map((item) => (
              <Slide
                key={item.id}
                img={item.img}
                mainTitle={item.mainTitle}
                title={item.title}
                price={item.price}
              />
            )
            )
          }
        </Slider>
      </div >
    </div >
  );
};

export default Hero;
