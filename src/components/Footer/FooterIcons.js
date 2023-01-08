import React from "react";
import classes from "./FooterIcons.module.css";

const FooterIcons = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>FooterIcons</div>;
};

export default FooterIcons;
