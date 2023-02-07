import React, { useRef } from "react";
import classes from "./SearchMobile.module.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import store from "../../store/store";
import queryActions from "../../store/querySlice";
import configActions from "../../store/configSlice";

const SearchMobile = ({ className, show, close }) => {
  const classesList = `${classes.container} ${className} ${
    show && classes.show
  }`;
  const inputRef = useRef();
  const searchHandler = () => {
    store.dispatch(queryActions.setSearchTerm(inputRef.current.value));
    close();
  };
  return (
    <div className={classesList}>
      <form className={classes.form}>
        <div className={classes.formItem}>
          <h6>Where</h6>
          <input
            type="text"
            placeholder="City, address or hotel"
            ref={inputRef}
          />
        </div>
        <Link to="/search">
          <Button
            className={classes.formButton}
            text="Search for clothes"
            onClick={searchHandler}
          ></Button>
        </Link>
      </form>
    </div>
  );
};

export default SearchMobile;
