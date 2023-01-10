import React from "react";
import classes from "./BookingColumn.module.css";

const BookingColumn = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>BookingColumn</div>;
};

export default BookingColumn;
