import React from "react";
import Button from "../../UI/Button";
import classes from "./CheckoutModal.module.css";

const CheckoutModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h2 className={classes.title}>How was your experience?</h2>
      <form className={classes.form}>
        <div className={classes.inputElement}>
          <label className={classes.label}>Email</label>
          <input type="email" className={classes.input} placeholder="Email" />
        </div>
        <div className={classes.inputElement}>
          <label className={classes.label}>Password</label>
          <input
            type="password"
            className={classes.input}
            placeholder="Password"
          />
        </div>
      </form>

      <Button text="Submit" onClick={null} />
      <div className={classes.switchBox}>
        <h5>Too much trouble?</h5>
        <Button alt={true} text="Skip" onClick={null} />
      </div>
    </div>
  );
};

export default CheckoutModal;
