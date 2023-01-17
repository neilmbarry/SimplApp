import React from "react";
import classes from "./MapFilterButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const MapFilterButton = ({ className, showMap, onToggle, onFilter }) => {
  const classesList = `${classes.main} ${className}`;

  return (
    <div className={classesList}>
      <div className={classes.left} onClick={onToggle}>
        <FontAwesomeIcon icon={showMap ? faListAlt : faMap} />
        {showMap ? "LIST" : "MAP"}
      </div>
      <div className={classes.right} onClick={onFilter}>
        <FontAwesomeIcon icon={faFilter} />
        FILTERS
      </div>
    </div>
  );
};

export default MapFilterButton;
