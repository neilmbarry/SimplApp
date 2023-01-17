import React from "react";
import { useSelector } from "react-redux";
import configActions from "../../../store/configSlice";
import store from "../../../store/store";
import classes from "./Backdrop.module.css";

const Backdrop = ({ className, onClick }) => {
  const menuOpen = useSelector((state) => state.config.value.menuOpen);
  const searchOpen = useSelector((state) => state.config.value.searchOpen);
  const filterOpen = useSelector((state) => state.config.value.filterModal);
  const show = menuOpen || searchOpen || filterOpen;
  const classesList = `${classes.main} ${className} ${show && classes.show}`;
  const closeAll = () => {
    store.dispatch(configActions.closeAll());
  };

  return <div className={classesList} onClick={closeAll}></div>;
};

export default Backdrop;
