import React from "react";
import classes from "./FilterBar.module.css";
import FilterButton from "../../../components/UI/FilterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SortModal from "./FilterModals/SortModal";
import TypeModal from "./FilterModals/TypeModal";
import SizeModal from "./FilterModals/SizeModal";
import BrandModal from "./FilterModals/BrandModal";
import ActivityModal from "./FilterModals/ActivityModal";
import store from "../../../store/store";
import configActions from "../../../store/configSlice";
import { useSelector } from "react-redux";

const typeOptions = ["Shirt", "Pants", "Dresses", "Shoes"];
const sizeOptions = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
const brandOptions = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
const activityOptions = [
  "Extra Small",
  "Small",
  "Medium",
  "Large",
  "Extra Large",
];

const FilterBar = ({ className }) => {
  const filterModal = useSelector((state) => state.config.value.filterModal);
  const classesList = `${classes.main} ${className}`;
  const showFilter = (filter) => {
    if (filter === filterModal) {
      return store.dispatch(configActions.setFilterModal(false));
    }
    store.dispatch(configActions.setFilterModal(filter));
  };
  return (
    <div className={classesList}>
      <FilterButton
        text="Sort by"
        onClick={() => showFilter("sort")}
        showOptions={filterModal === "sort"}
      >
        <SortModal />
      </FilterButton>
      <FilterButton
        text="Type"
        onClick={() => showFilter("type")}
        showOptions={filterModal === "type"}
      >
        <TypeModal options={typeOptions} />
      </FilterButton>
      <FilterButton
        text="Size"
        onClick={() => showFilter("size")}
        showOptions={filterModal === "size"}
      >
        <TypeModal options={sizeOptions} />
      </FilterButton>
      <FilterButton
        text="Brand"
        onClick={() => showFilter("brand")}
        showOptions={filterModal === "brand"}
      >
        <TypeModal options={brandOptions} />
      </FilterButton>
      <FilterButton
        text="Activity"
        onClick={() => showFilter("activity")}
        showOptions={filterModal === "activity"}
      >
        <TypeModal options={activityOptions} />
      </FilterButton>
      {/* <FilterButton text="Delivery" />
      <FilterButton text="More filters">
        <FontAwesomeIcon icon={faFilter} />
      </FilterButton> */}
    </div>
  );
};

export default FilterBar;
