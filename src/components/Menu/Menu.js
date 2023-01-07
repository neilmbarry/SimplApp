import React from "react";
import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";
import {
  faHeart,
  faComment,
  faFileLines,
} from "@fortawesome/free-regular-svg-icons";
import {
  faRoad,
  faShirt,
  faHeadset,
  faKey,
  faArrowRightFromBracket,
  faRightToBracket,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Menu = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const menuOpen = useSelector((state) => state.config.value.menuOpen);
  return (
    menuOpen && (
      <div className={classesList}>
        <MenuItem text="Favourites" icon={faHeart} />
        <MenuItem text="Trips" icon={faRoad} />
        <MenuItem text="Inbox" icon={faComment} />
        <div className={classes.divider}></div>
        <MenuItem text="Profile" icon={faPerson} />
        <MenuItem text="Account" icon={faRightToBracket} />
        <MenuItem text="Become a host" icon={faShirt} />
        <div className={classes.divider}></div>
        <MenuItem text="How Simpl. works" icon={faKey} />
        <MenuItem text="Contact support" icon={faHeadset} />
        <MenuItem text="Legal" icon={faFileLines} />
        <div className={classes.divider}></div>
        <MenuItem text="Log out" icon={faArrowRightFromBracket} />
      </div>
    )
  );
};

export default Menu;
