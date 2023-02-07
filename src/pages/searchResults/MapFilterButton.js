import React from "react";
import classes from "./MapFilterButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const MapFilterButton = ({ className, onFilter }) => {
  const classesList = `${classes.main} ${className}`;

  return (
    <div className={classesList}>
      <div className={classes.right} onClick={onFilter}>
        <FontAwesomeIcon icon={faFilter} />
        FILTERS
      </div>
    </div>
  );
};

export default MapFilterButton;
