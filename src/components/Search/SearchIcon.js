import React from "react";
import classes from "./SearchIcon.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchIcon = ({ className, onClick }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList} onClick={onClick}>
      <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchIcon;
