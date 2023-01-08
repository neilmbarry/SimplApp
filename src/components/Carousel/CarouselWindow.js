import React, { useState, useEffect } from "react";
import classes from "./CarouselWindow.module.css";
import CarouselButton from "../UI/CarouselButton";

const CarouselWindow = ({
  windows,
  children,
  animateTransition,
  slide,
  leftClick,
}) => {
  const translated = {
    transform: `translateX(${slide * -(1 / windows) * 1000}px)`,
  };

  return (
    <div
      className={`${classes.window} ${!animateTransition && classes.noAnimate}`}
      style={translated}
    >
      {children}
    </div>
  );
};

export default CarouselWindow;
