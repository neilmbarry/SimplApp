import React from "react";
import classes from "./PhotosCategory.module.css";

import CarouselSection from "../../../components/Carousel/CarouselSection";

import hiking from "../../../img-compressed/hiking.jpg";
import dance from "../../../img-compressed/dance.jpg";
import run from "../../../img-compressed/runn.jpg";
import Button from "../../../components/UI/Button";

const activitiesArray = [
  {
    image: hiking,
    title: "Hiking",
  },
  {
    image: dance,
    title: "Dancing",
  },
  {
    image: run,
    title: "Running",
  },
];

const PhotosCategory = ({ className }) => {
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
    </div>
  );
};

export default PhotosCategory;
