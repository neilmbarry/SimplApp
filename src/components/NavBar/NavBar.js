import React from "react";
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserIcon from "../UI/UserIcon";
import MenuButton from "../UI/MenuButton";

const NavBar = ({ search }) => {
  const searchBar = (
    <div className={classes.searchBox}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        className={classes.input}
        type="text"
        placeholder="City, airport, address or hotel"
      />
    </div>
  );
  return (
    <nav className={classes.nav}>
      <div className={classes.navLeft}>
        <Link to="/">
          <div className={classes.logo}>
            <h4>Simpl.</h4>
          </div>
        </Link>
      </div>
      <ul className={classes.navItems}>
        <Link to="/addProduct">
          <li>
            <h5>Become a host</h5>
          </li>
        </Link>
        <MenuButton />
      </ul>
    </nav>
  );
};

export default NavBar;
