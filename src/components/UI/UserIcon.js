import React from "react";
import classes from "./UserIcon.module.css";

const UserIcon = ({ className }) => {
  const classesList = `${classes.main} seo-pages-htr69o ${className}`;
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classesList}
      role="img"
      version="1.1"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.597 38.062a19.369 19.369 0 0 0 13.342 5.314c5.057 0 9.67-1.941 13.13-5.118-4.804-7.005-12.779-7.09-13.127-7.09-5.514 0-9.997-4.484-9.997-9.993 0-5.51 4.483-9.994 9.994-9.994 5.51 0 9.994 4.483 9.994 9.994 0 1.89-.53 3.73-1.533 5.321a1.25 1.25 0 1 1-2.115-1.334 7.473 7.473 0 0 0 1.148-3.987c0-4.132-3.362-7.494-7.494-7.494s-7.494 3.362-7.494 7.494c0 4.131 3.362 7.493 7.494 7.493h.013c.54 0 9.34.124 14.879 7.75a19.351 19.351 0 0 0 4.545-12.48C43.377 13.22 34.659 4.5 23.94 4.5 13.219 4.5 4.5 13.22 4.5 23.938c0 4.643 1.637 8.911 4.363 12.258 1.79-2.386 4.128-4.028 5.886-5.03a1.25 1.25 0 1 1 1.238 2.171c-1.633.93-3.83 2.482-5.39 4.725Zm29.079 1.146a1.245 1.245 0 0 1-.225.228c-3.973 3.977-9.46 6.44-15.512 6.44C11.84 45.876 2 36.035 2 23.938 2 11.842 11.841 2 23.94 2c12.096 0 21.938 9.842 21.938 21.938 0 5.93-2.365 11.317-6.201 15.27Z"
        fill="#121214"
      ></path>
    </svg>
  );
};

export default UserIcon;
