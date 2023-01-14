import React from "react";
import classes from "./PhotosCategory.module.css";

import CarouselSection from "../../../components/Carousel/CarouselSection";

import hiking from "../../../img-compressed/hiking.jpg";
import dance from "../../../img-compressed/dance.jpg";
import run from "../../../img-compressed/runn.jpg";
import coat from "../../../img/coat.jpg";
import jacket from "../../../img/jaclet.jpg";
import jeans from "../../../img/jeans.jpg";
import shirt from "../../../img/santhosh-kumar-RqYTuWkTdEs-unsplash.jpg";
import tshirt from "../../../img/tshirt.jpg";

import Button from "../../../components/UI/Button";

const activitiesArray = [
  {
    image: hiking,
    // title: "Hiking",
  },
  {
    image: dance,
    // title: "Dancing",
  },
  {
    image: run,
    // title: "Running",
  },
  {
    image: coat,
    // title: "Running",
  },
  {
    image: jacket,
    // title: "Running",
  },
  {
    image: jeans,
    // title: "Running",
  },
  {
    image: shirt,
    // title: "Running",
  },
  {
    image: tshirt,
    // title: "Running",
  },
];

const PhotosCategory = ({ className, onNext }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h6>
        A high quality photo can increase your earning potential by attracting
        more guests. Here we have a curated list of photos for you to choose
        from.
      </h6>
      <CarouselSection
        // title="Browse by experience"
        windows={3}
        // taller={true}
        tiles={activitiesArray}
        className={classes.carousel}
        width={650}
      />
      <Button text="Select" className={classes.button} />
      {onNext && (
        <Button text="Next" className={classes.next} onClick={onNext} />
      )}
    </div>
  );
};

export default PhotosCategory;
