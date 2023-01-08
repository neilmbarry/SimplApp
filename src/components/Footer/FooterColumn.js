import React from "react";
import classes from "./FooterColumn.module.css";

const FooterColumn = ({ className, title, linksArray }) => {
  const classesList = `${classes.main} ${className}`;
  const links = linksArray.map((link) => (
    <li className={classes.item} key={link}>
      {link}
    </li>
  ));
  return (
    <div className={classesList}>
      <h4 className={classes.subtitle}>{title}</h4>
      <ul className={classes.list}>{links}</ul>
    </div>
  );
};

export default FooterColumn;
