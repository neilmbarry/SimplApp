import React, { useState } from "react";
import classes from "./CarouselSection.module.css";
import CarouselWindow from "./CarouselWindow";
import CarouselTile from "./CarouselTile";
import CarouselButton from "../UI/CarouselButton";

import {
  generateTiles,
  generateHostTiles,
  generateSlides,
} from "./generateTiles";

const CarouselSection = ({
  title,
  windows,
  taller,
  tiles,
  hosts,
  slides,
  className,
}) => {
  const [slide, setSlide] = useState(tiles?.length);
  const [animateTransition, setAnimateTransition] = useState(true);
  const [clickable, setClickable] = useState(true);
  const elements = tiles || hosts || slides;
  const nextSlide = () => {
    if (!clickable) return;
    setClickable(false);
    console.log("next slide");
    if (slide < elements?.length * 2 - 1) {
      if (!animateTransition) setAnimateTransition(true);
      setTimeout(() => {
        setClickable(true);
      }, 500);
      return setSlide(slide + 1);
    }
    setSlide(slide + 1);
    setTimeout(() => {
      setClickable(true);
      setAnimateTransition(false);
      return setSlide(elements?.length);
    }, 500);
  };
  const prevSlide = () => {
    if (!clickable) return;
    setClickable(false);
    console.log("next slide");
    if (slide > 1) {
      if (!animateTransition) setAnimateTransition(true);
      setTimeout(() => {
        setClickable(true);
      }, 500);
      return setSlide(slide - 1);
    }
    setSlide(slide - 1);
    setTimeout(() => {
      setClickable(true);
      setAnimateTransition(false);
      return setSlide(elements?.length);
      // return setSlide(tiles?.length * 2 - 3 - windows);
    }, 500);

    // if (slide > 0) setSlide(slide - 1);
  };

  const tilesComponent = generateTiles(tiles, windows, taller);
  const hostsComponent = generateHostTiles(hosts, windows, taller);
  const slidesComponent = generateSlides(slides, windows, taller);

  const header = title ? <h3 className={classes.title}>{title}</h3> : "";

  return (
    <div className={`${classes.sectionContainer} ${className}`}>
      <div className={classes.windowContainer} style={{}}>
        {header}
        <CarouselWindow
          windows={windows}
          onNext={nextSlide}
          slide={slide}
          animateTransition={animateTransition}
        >
          {tilesComponent}
          {hostsComponent}
          {slidesComponent}
        </CarouselWindow>
        <CarouselButton type="right" onClick={nextSlide} />
        <CarouselButton type="left" onClick={prevSlide} />
      </div>
    </div>
  );
};

export default CarouselSection;
