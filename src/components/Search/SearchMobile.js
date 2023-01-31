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
        {/* <div className={classes.formItem}>
          <h6>From</h6>
          <div>
            <input type="date" defaultValue="2022-06-03" />
         
          </div>
        </div>
        <div className={classes.formItem}>
          <h6>Until</h6>
          <div>
            <input type="date" defaultValue="2022-07-04" />
         
          </div>
        </div> */}

        {/* <div className={classes.formItem}>
          <Link to="/search">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="searchIconLabel"
              className="seo-pages-1iuz9hb"
              role="img"
              version="1.1"
            >
              <path
                d="M20.75 21.52a.62.62 0 0 1-.44-.18l-6.11-6.11a.627.627 0 0 1-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 0 0 6.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z"
                fill="#121214"
              ></path>
            </svg>
          </Link>
        </div> */}
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
