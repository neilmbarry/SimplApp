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
import store from "../../store/store";
import configActions from "../../store/configSlice";
import { Link } from "react-router-dom";

const Menu = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const menuOpen = useSelector((state) => state.config.value.menuOpen);
  const openLogin = () => {
    store.dispatch(configActions.setModal("signup"));
  };

  const logout = () => {
    store.dispatch(configActions.setToken(null));
    store.dispatch(configActions.setNotification("You were logged out."));
  };

  const close = () => {
    store.dispatch(configActions.toggleMenu());
  };
  const token = useSelector((state) => state.config.value.token);
  return (
    menuOpen && (
      <div className={classesList} onClick={close}>
        {token ? (
          <>
            <Link to="favourites">
              <MenuItem text="Favourites" icon={faHeart} />
            </Link>
            <MenuItem text="Trips" icon={faRoad} />
            <MenuItem text="Inbox" icon={faComment} />

            <div className={classes.divider}></div>
          </>
        ) : (
          <>
            <MenuItem
              text="Log in / Sign up"
              icon={faArrowRightFromBracket}
              onClick={openLogin}
            />
            <div className={classes.divider}></div>
          </>
        )}
        {token && (
          <>
            {" "}
            <Link to="host/me">
              <MenuItem text="Profile" icon={faPerson} />
            </Link>
            <MenuItem text="Account" icon={faRightToBracket} />
            <MenuItem text="Become a host" icon={faShirt} />
            <div className={classes.divider}></div>
          </>
        )}
        <MenuItem text="How Simpl. works" icon={faKey} />
        <MenuItem text="Contact support" icon={faHeadset} />
        <MenuItem text="Legal" icon={faFileLines} />
        {token && (
          <>
            {" "}
            <div className={classes.divider}></div>
            <MenuItem
              text="Log out"
              icon={faArrowRightFromBracket}
              onClick={logout}
            />
          </>
        )}
      </div>
    )
  );
};

export default Menu;
