import React from "react";
import classes from "./PhotosCategory.module.css";

import CarouselSection from "../../../components/Carousel/CarouselSection";

import Button from "../../../components/UI/Button";

import imageObj from "../../../helpers/imageArrays";

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

  const tilesArray = imageObj[clothesType.toLowerCase()].map((el) => {
    return { image: el };
  });

  return (
    <div className={classesList}>
      <h5>
        A high quality photo can increase your earning potential by attracting
        more guests. Here we have a curated list of photos for you to choose
        from.
      </h5>
      <CarouselSection
        windows={3}
        tiles={tilesArray}
        className={classes.carousel}
        width={650}
        userSelect={true}
        selected={"shirt1"}
      />
      <div className={classes.buttonContainer}>
        <Button text="Previous" className={classes.next} onClick={prev} />
        <Button text="Next" className={classes.next} onClick={next} />
      </div>
    </div>
  );
};

export default PhotosCategory;
