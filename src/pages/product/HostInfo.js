import React from "react";
import classes from "./HostInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faStar,
  faCircle,
  faAward,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import HostImage from "../host/HostImage/HostImage";
import HostAdditional from "../host/HostAdditional/HostAdditional";
import { dateFormat } from "../../helpers/dateFormat";
import { useNavigate } from "react-router-dom";

const HostInfo = ({ className, hostInfo }) => {
  const classesList = `${classes.main} ${className}`;

  const navigate = useNavigate();
  const goToHost = () => {
    navigate("/host/" + hostInfo.id);
  };
  return (
    <div className={classesList}>
      <h5 className={classes.title}>HOSTED BY</h5>
      <div className={classes.hostBox} onClick={goToHost}>
        <HostImage hostInfo={hostInfo} />
        <div className={classes.hostInfo}>
          <h3>{`${hostInfo?.firstName} ${hostInfo?.lastName?.[0]}.`}</h3>
          {hostInfo?.allStar && (
            <h4>
              <FontAwesomeIcon icon={faTrophy} />
              All-Star Host
            </h4>
          )}
          <h4 className={classes.bullet}>
            {hostInfo?.ratingsQuantity} trips{" "}
            <FontAwesomeIcon icon={faCircle} /> Joined{" "}
            {dateFormat(hostInfo?.joined)}
          </h4>
          <h5>Typically responds in 2 minutes</h5>
        </div>
      </div>
      <HostAdditional host={hostInfo} />
      {/* <div className={classes.additionalGroup}>
        <div className={classes.additionalInfo}>
          <FontAwesomeIcon icon={faAward} />
          <div className={classes.additionalText}>
            <h4>
              All-Star Hosts like {hostInfo.name} are the top-rated and most
              experienced hosts on Simpl.
            </h4>
            <h5>Learn More</h5>
          </div>
        </div>
        <div className={classes.additionalInfo}>
          <FontAwesomeIcon icon={faHandSparkles} />
          <div className={classes.additionalText}>
            <h4>
              {hostInfo.name} has completed training on enhanced cleaning and
              desinfection practices.
            </h4>
            <h5>Learn More</h5>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HostInfo;
