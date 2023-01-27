import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./FaveIcon.module.css";

import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FaveIcon = ({ className, fave }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <FontAwesomeIcon icon={fave ? faHeart : faHeartEmpty} />
    </div>
  );
};

export default FaveIcon;
