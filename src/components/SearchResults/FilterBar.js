import React from "react";
import classes from "./FilterBar.module.css";
import FilterButton from "../UI/FilterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FilterBar = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <FilterButton text="Sort by" />
      <FilterButton text="Price" />
      <FilterButton text="Book instantly" />
      <FilterButton text="Delivery" />
      <FilterButton text="More filters">
        <FontAwesomeIcon icon={faFilter} />
      </FilterButton>
    </div>
  );
};

export default FilterBar;
