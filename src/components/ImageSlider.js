import React, { useState } from "react";
import { ReviewData } from "../data/ReviewData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  console.log(length);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="arrow arrow--left" onClick={prevSlide} />
      <FaArrowAltCircleRight
        className="arrow arrow--right"
        onClick={nextSlide}
      />
      {ReviewData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && slide};
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
