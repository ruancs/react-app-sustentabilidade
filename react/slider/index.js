import React from "react"
import Slider from "react-slick"


export default function Slick({ children }) {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {children}
        </Slider>
      </div>

    </>

  )
}
