import React from "react";
import classes from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import UserIcon from "../UI/UserIcon";

const SearchBar = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <Link to="/">
        <div className={classes.logo}>
          <h4>SIMP.</h4>
        </div>
      </Link>
      <div className={classes.whereBox}>
        <h4>Where</h4>
        <input type="text" defaultValue="San Francisco, CA" />
      </div>
      <div className={classes.fromBox}>
        <h4>From</h4>
        <input type="date" defaultValue="2022-08-03" />
      </div>
      <div className={classes.untilBox}>
        <h4>Until</h4>
        <input type="date" defaultValue="2022-08-13" />
      </div>
      <div className={classes.user}>
        <UserIcon />
      </div>
    </div>
  );
};

export default SearchBar;
