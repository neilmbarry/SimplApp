import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import configActions from "../../store/configSlice";
import store from "../../store/store";
import classes from "./Notification.module.css";

const Notification = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const notification = useSelector((state) => state.config.value.notification);

  useEffect(() => {
    if (!notification) return;
    const timeout = setTimeout(() => {
      store.dispatch(configActions.setNotification(null));
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [notification]);

  return (
    notification && (
      <div className={classesList}>
        <h3>{notification}</h3>
      </div>
    )
  );
};

export default Notification;
