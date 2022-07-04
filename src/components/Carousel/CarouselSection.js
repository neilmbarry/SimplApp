import React, { useState } from "react";
import classes from "./CarouselSection.module.css";
import CarouselWindow from "./CarouselWindow";
import CarouselTile from "./CarouselTile";
import CarouselButton from "../UI/CarouselButton";

const CarouselSection = ({ title, windows, children }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    console.log("next slide");
    if (slide < children.length - windows) setSlide(slide + 1);
  };
  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const header = title ? <h3 className={classes.title}>{title}</h3> : "";

  return (
    <div className={classes.sectionContainer}>
      <div className={classes.windowContainer} style={{}}>
        {header}
        <CarouselWindow windows={windows} onNext={nextSlide} slide={slide}>
          {children}
        </CarouselWindow>
      </div>
      <CarouselButton type="right" onClick={nextSlide} />
      <CarouselButton type="left" onClick={prevSlide} />
    </div>
  );
};

export default CarouselSection;
