import React from "react";
import classes from "./PhotosCategory.module.css";

import CarouselSection from "../../../components/Carousel/CarouselSection";

import Button from "../../../components/UI/Button";

import {
  shirts,
  pants,
  shoes,
  dresses,
  jackets,
  sports,
  pajamas,
} from "../../../helpers/imageArrays";
import imageObj from "../../../helpers/imageArrays";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PhotosCategory = ({ className, onPage }) => {
  const classesList = `${classes.main} ${className}`;
  const clothesType = useSelector((state) => state.newProduct.value.type);

  const next = () => {
    onPage(4);
  };
  const prev = () => {
    onPage(2);
  };
  // const tilesArray = (clothesType || shirts).map((el) => {
  //   return { image: el };
  // });

  const tilesArray = imageObj[clothesType.toLowerCase()].map((el) => {
    return { image: el };
  });

  // useEffect(() => {
  //   setClothesType(selectedClothesType);
  // }, [selectedClothesType]);

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

        tiles={tilesArray}
        className={classes.carousel}
        width={650}
        userSelect={true}
        selected={"shirt1"}
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
