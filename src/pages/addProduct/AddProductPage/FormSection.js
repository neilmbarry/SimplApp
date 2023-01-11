import React from "react";
import classes from "./FormSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const FormSection = ({
  className,
  children,
  toggle,
  isOpen,
  title,
  height = 450,
}) => {
  const classesList = `${classes.main} ${className}`;
  const heightToggle = isOpen ? height : 0;

  return (
    <div className={classesList}>
      <div className={classes.mainBar} onClick={toggle}>
        <div className={classes.mainBarLeft}>
          <div className={`${isOpen && classes.openIcon} ${classes.icon}`}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <h4>{title}</h4>
        </div>
        <div className={classes.mainBarRight}>
          {!isOpen && <h4 className={classes.purple}>Edit</h4>}
        </div>
      </div>
      <div
        className={`${isOpen && classes.openContent} ${classes.content}`}
        // style={isOpen && openStyle}
        style={{ height: heightToggle + "px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormSection;
