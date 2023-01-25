import React, { useRef } from "react";
import classes from "./Search.module.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import SearchIcon from "./SearchIcon";
import store from "../../store/store";
import queryActions from "../../store/querySlice";

const Search = () => {
  const queryRef = useRef();
  const updateSearchQuery = () => {
    store.dispatch(queryActions.reset());
    store.dispatch(queryActions.setSearchTerm(queryRef.current.value));
  };
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <div className={classes.whatInput}>
          <h6>What</h6>
          <input
            type="text"
            placeholder="Search by item (shirts, pants, shoes etc.)"
            ref={queryRef}
          />
        </div>
        <div className={classes.fromInput}>
          <h6>From</h6>
          <div>
            <input type="date" defaultValue="2022-06-03" />
            {/* <input type="time" /> */}
          </div>
        </div>
        <div className={classes.untilInput}>
          <h6>Until</h6>
          <div>
            <input type="date" defaultValue="2022-07-04" />
            {/* <input type="time" /> */}
          </div>
        </div>

        <Link
          to="/search"
          className={classes.searchIcon}
          onClick={updateSearchQuery}
        >
          <SearchIcon />
        </Link>
        <Link to="/search">
          <Button
            className={classes.formButton}
            text="Search for clothes"
            onClick={updateSearchQuery}
          ></Button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
