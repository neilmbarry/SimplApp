import React from "react";
import classes from "./CarouselSlide.module.css";
import photo from "../../img-compressed/test.jpg";
import Button from "../UI/Button";

const CarouselSlide = () => {
  return (
    <div className={classes.slide}>
      <div className={classes.imageContainer}>
        <img src={photo} alt="" />
      </div>
      <div className={classes.textContainer}>
        <h2>
          Find the perfect outfit to
          <span className={classes.highlight}> conquer the world</span>
        </h2>
        <p>
          Look your best in any situation, event or climate with a curated
          selection of vibrant collections.
        </p>
        <Button text="Browse collections" onClick={null} />
      </div>
    </div>
  );
};

export default CarouselSlide;
