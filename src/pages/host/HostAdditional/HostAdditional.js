import React from "react";
import classes from "./HostAdditional.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

const hostInfo = {
  name: "Neil",
};

const HostAdditional = ({ className, host }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.additionalInfo}>
        <FontAwesomeIcon icon={faAward} />
        <div className={classes.additionalText}>
          <h4>
            All-Star Hosts like {host?.firstName} are the top-rated and most
            experienced hosts on Simpl.
          </h4>
          <h5>Learn More</h5>
        </div>
      </div>
      <div className={classes.additionalInfo}>
        <FontAwesomeIcon icon={faHandSparkles} />
        <div className={classes.additionalText}>
          <h4>
            {host?.firstName} has completed training on enhanced cleaning and
            desinfection practices.
          </h4>
          <h5>Learn More</h5>
        </div>
      </div>
    </div>
  );
};

export default HostAdditional;
