import React from "react";
import classes from "./FormSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const FormSection = ({ className, children, toggle, isOpen }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList} onClick={toggle}>
      <div className={classes.mainBar}>
        <div className={classes.mainBarLeft}>
          <div className={`${isOpen && classes.openIcon} ${classes.icon}`}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <h4>Your Car</h4>
        </div>
        <div className={classes.mainBarRight}>
          <h4 className={classes.purple}>Edit</h4>
        </div>
      </div>
      <div className={`${isOpen && classes.openContent} ${classes.content}`}>
        {children}
      </div>
    </div>
  );
};

export default FormSection;
