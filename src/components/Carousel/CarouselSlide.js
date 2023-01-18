import React from "react";
import classes from "./CarouselSlide.module.css";
import Button from "../UI/Button";
import images from "../../helpers/imagesObj";

const CarouselSlide = ({ image, title, span, paragraph, className }) => {
  const classesList = `${classes.slide} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.imageContainer}>
        <img src={images[image]} alt="" />
      </div>
      <div className={classes.textContainer}>
        <h2>
          {title}
          <span className={classes.highlight}> {span}</span>
        </h2>
        <p>{paragraph}</p>
        <Button text="Browse collections" onClick={null} />
      </div>
    </div>
  );
};

export default CarouselSlide;
