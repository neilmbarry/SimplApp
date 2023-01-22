import React from "react";

import classes from "./MenuButton.module.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import UserIcon from "./UserIcon";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import store from "../../store/store";
import configActions from "../../store/configSlice";
import { useSelector } from "react-redux";
import images from "../../helpers/imagesObj";

const MenuButton = ({ className }) => {
  const menuOpen = useSelector((state) => state.config.value.menuOpen);
  const classesList = `${classes.main} ${className} ${
    menuOpen && classes.open
  }`;
  const config = useSelector((state) => state.config.value);
  const toggleMenu = () => {
    store.dispatch(configActions.toggleMenu());
  };
  return (
    <div className={classesList} onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} className={classes.menu} />
      {/* <UserIcon className={classes.user} /> */}
      <div className={classes.userContainer}>
        {config.token ? (
          <img src={images[config.userImage || "man1"]} alt="user" />
        ) : (
          <FontAwesomeIcon icon={faUser} className={classes.userIcon} />
        )}
      </div>
    </div>
  );
};

export default MenuButton;
