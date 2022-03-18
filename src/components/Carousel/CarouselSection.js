import React, { useState } from "react";
import classes from "./CarouselSection.module.css";
import CarouselWindow from "./CarouselWindow";
import CarouselTile from "./CarouselTile";

const CarouselSection = ({ title, windows, children }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    if (slide < children.length - windows) setSlide(slide + 1);
  };
  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const header = title ? <h3 className={classes.title}>{title}</h3> : "";
  const carouselWidth = 1000;
  return (
    <div className={classes.sectionContainer}>
      <div className={classes.windowContainer} style={{}}>
        {header}
        <CarouselWindow windows={windows} onNext={nextSlide} slide={slide}>
          {children}
        </CarouselWindow>
      </div>
      <button className={classes.next} onClick={nextSlide}>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="a69e41d0-7237-42dc-b733-825526e5221c_rightArrowLabel"
          class="seo-pages-1o6k71p"
          role="img"
          version="1.1"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z"
            fill="#121214"
          ></path>
        </svg>
      </button>
      <button className={classes.prev} onClick={prevSlide}>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="a69e41d0-7237-42dc-b733-825526e5221c_leftArrowLabel"
          class="seo-pages-1o6k71p"
          role="img"
          version="1.1"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z"
            fill="#121214"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CarouselSection;
