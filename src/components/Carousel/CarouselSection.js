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
  width,
  userSelect,
  onSelect,
  onClick,
}) => {
  const [slide, setSlide] = useState(
    tiles?.length || hosts?.length || slides?.length
  );
  const [animateTransition, setAnimateTransition] = useState(true);
  const [clickable, setClickable] = useState(true);

  const elements = tiles || hosts || slides;
  const nextSlide = () => {
    if (!clickable) return;
    setClickable(false);

    if (slide < elements?.length * 2 - 1) {
      if (!animateTransition) {
        setAnimateTransition(true);
      }
      setTimeout(() => {
        setClickable(true);
      }, 500);

      return setSlide((slide) => slide + 1);
    }
    setSlide((slide) => slide + 1);
    setTimeout(() => {
      setClickable(true);
      setAnimateTransition(false);
      return setSlide(elements?.length);
    }, 500);
  };
  const prevSlide = () => {
    if (!clickable) return;
    setClickable(false);

    if (slide > 1) {
      if (!animateTransition) setAnimateTransition(true);
      setTimeout(() => {
        setClickable(true);
      }, 500);
      return setSlide((slide) => slide - 1);
    }
    setSlide((slide) => slide - 1);
    setTimeout(() => {
      setClickable(true);
      setAnimateTransition(false);
      return setSlide(elements?.length);
      // return setSlide(tiles?.length * 2 - 3 - windows);
    }, 500);

    // if (slide > 0) setSlide(slide - 1);
  };

  const tilesComponent = generateTiles(
    tiles,
    windows,
    taller,
    width,
    userSelect,
    onSelect
  );
  const hostsComponent = generateHostTiles(hosts, windows, taller, width);
  const slidesComponent = generateSlides(slides, windows, taller, width);

  const header = title ? (
    <h3 className={classes.title}>{title}</h3>
  ) : (
    <div className={classes.empty}></div>
  );

  return (
    <div className={`${classes.sectionContainer} ${className}`} onClick={null}>
      <div
        className={`${classes.windowContainer}`}
        style={{ width: width + "px" }}
      >
        {header}
        <CarouselWindow
          windows={windows}
          width={width}
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
