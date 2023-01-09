import React from "react";
import classes from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import MenuButton from "../../components/UI/MenuButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ className, toggleSearch }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.left}>
        <Link to="/">
          <div className={classes.logo}>
            <h4>Simpl.</h4>
          </div>
        </Link>
        <div className={classes.formBox}>
          <div className={classes.whereBox}>
            <h4>Where</h4>
            <input type="text" defaultValue="Toronto, ON" />
          </div>
          <div className={classes.fromBox}>
            <h4>From</h4>
            <input type="date" defaultValue="2022-08-03" />
          </div>
          <div className={classes.untilBox}>
            <h4>Until</h4>
            <input type="date" defaultValue="2022-08-13" />
          </div>
        </div>
      </div>
      <div className={classes.mobileBox} onClick={toggleSearch}>
        <div className={classes.mobileInfo}>
          <p className={classes.mobileText}>Toronto</p>
          <p className={classes.mobileText}>Jan 2 - June 8</p>
        </div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <MenuButton />
    </div>
  );
};

export default SearchBar;
