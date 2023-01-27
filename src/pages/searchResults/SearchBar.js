import React, { useRef } from "react";
import classes from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import MenuButton from "../../components/UI/MenuButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "../../components/Search/SearchIcon";
import { useSelector } from "react-redux";
import store from "../../store/store";
import queryActions from "../../store/querySlice";

const SearchBar = ({ className, toggleSearch }) => {
  const classesList = `${classes.main} ${className}`;
  const queryTerm = useSelector((state) => state.query.value.searchTerm);
  const searchRef = useRef();
  console.log(queryTerm);
  const searchHandler = () => {
    console.log("search handler");

    store.dispatch(queryActions.reset());
    store.dispatch(queryActions.setSearchTerm(searchRef.current.value));
  };
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
            {/* <h4>What</h4> */}
            <input type="text" defaultValue={queryTerm} ref={searchRef} />
            <SearchIcon
              className={classes.searchIcon}
              onClick={searchHandler}
            />
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
