import React from "react";
import classes from "./PhotosCategory.module.css";

import CarouselSection from "../../../components/Carousel/CarouselSection";

import Button from "../../../components/UI/Button";

const activitiesArray = [
  {
    image: "hiking",
    // title: "Hiking",
  },
  {
    image: "dance",
    // title: "Dancing",
  },
  {
    image: "runner",
    // title: "Running",
  },
  {
    image: "coatbrown",
    // title: "Running",
  },
  {
    image: "jacketbrown",
    // title: "Running",
  },
  {
    image: "pants",
    // title: "Running",
  },
  {
    image: "shirtblue",
    // title: "Running",
  },
];

const PhotosCategory = ({ className, onPage }) => {
  const classesList = `${classes.main} ${className}`;
  const next = () => {
    onPage(4);
  };
  const prev = () => {
    onPage(2);
  };
  return (
    <div className={classesList}>
      <h5>
        A high quality photo can increase your earning potential by attracting
        more guests. Here we have a curated list of photos for you to choose
        from.
      </h5>
      <CarouselSection
        // title="Browse by experience"
        windows={3}
        // taller={true}
        tiles={activitiesArray}
        className={classes.carousel}
        width={650}
      />
      {/* <Button text="Select" className={classes.button} /> */}

      <div className={classes.buttonContainer}>
        <Button text="Previous" className={classes.next} onClick={prev} />
        <Button text="Next" className={classes.next} onClick={next} />
      </div>
    </div>
  );
};

export default PhotosCategory;
