import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./index.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const About = ({ slides }) => {
  const [current, setCurr] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurr(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurr(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider" id="about">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel img" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default About;
