import React, { useState } from "react";
import classes from "./CarouselSection.module.css";
import CarouselWindow from "./CarouselWindow";
import CarouselTile from "./CarouselTile";
import CarouselButton from "../UI/CarouselButton";

const CarouselSection = ({ title, windows, children, tiles }) => {
  const [slide, setSlide] = useState(2);
  const nextSlide = () => {
    console.log("next slide");
    if (slide < tiles?.length - windows) setSlide(slide + 1);
  };
  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };
  const tileComponents = tiles?.map((tile) => {
    return (
      <CarouselTile
        picture={tile.image}
        title={tile.title}
        key={tile.title}
        fraction={windows}
      />
    );
  });

  console.log(tiles);

  const header = title ? <h3 className={classes.title}>{title}</h3> : "";

  return (
    <div className={classes.sectionContainer}>
      <div className={classes.windowContainer} style={{}}>
        {header}
        <CarouselWindow windows={windows} onNext={nextSlide} slide={slide}>
          {children}
          {tiles && tileComponents}
        </CarouselWindow>
      </div>
      <CarouselButton type="right" onClick={nextSlide} />
      <CarouselButton type="left" onClick={prevSlide} />
    </div>
  );
};

export default CarouselSection;
