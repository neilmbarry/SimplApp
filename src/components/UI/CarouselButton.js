import React from "react";
import classes from "./CarouselButton.module.css";

const CarouselButton = ({ type, onClick }) => {
  const svg =
    type === "left" ? (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="a69e41d0-7237-42dc-b733-825526e5221c_leftArrowLabel"
        className="seo-pages-1o6k71p"
        role="img"
        version="1.1"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z"
          fill="#121214"
        ></path>
      </svg>
    ) : (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="a69e41d0-7237-42dc-b733-825526e5221c_rightArrowLabel"
        className="seo-pages-1o6k71p"
        role="img"
        version="1.1"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z"
          fill="#121214"
        ></path>
      </svg>
    );
  return (
    <button className={classes[type]} onClick={onClick}>
      {svg}
    </button>
  );
};

export default CarouselButton;
