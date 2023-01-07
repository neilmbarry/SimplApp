import React from "react";

import classes from "./MenuButton.module.css";

import UserIcon from "./UserIcon";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import store from "../../store/store";
import configActions from "../../store/configSlice";
import { useSelector } from "react-redux";

const MenuButton = ({ className }) => {
  const menuOpen = useSelector((state) => state.config.value.menuOpen);
  const classesList = `${classes.main} ${className} ${
    menuOpen && classes.open
  }`;
  const toggleMenu = () => {
    store.dispatch(configActions.toggleMenu());
  };
  return (
    <div className={classesList} onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} className={classes.menu} />
      <UserIcon className={classes.user} />
    </div>
  );
};

export default MenuButton;
