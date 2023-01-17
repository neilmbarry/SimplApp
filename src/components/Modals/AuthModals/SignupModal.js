import React, { useRef } from "react";
import configActions from "../../../store/configSlice";
import store from "../../../store/store";
import Button from "../../UI/Button";
import classes from "./SignupModal.module.css";

const SignupModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const signup = () => {
    const first = firstRef.current.value;
    const last = lastRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(first, last, email, password);
  };
  const switchAuth = () => {
    store.dispatch(configActions.setModal("login"));
  };
  return (
    <div className={classesList}>
      <h2 className={classes.title}>Let's get started</h2>
      <form className={classes.form}>
        <div className={classes.namesBox}>
          <div className={classes.inputElement}>
            <label className={classes.label}>First name</label>
            <input
              type="text"
              className={classes.input}
              placeholder="First name"
              ref={firstRef}
            />
          </div>
          <div className={classes.inputElement}>
            <label className={classes.label}>Last name</label>
            <input
              type="text"
              className={classes.input}
              placeholder="Last name"
              ref={lastRef}
            />
          </div>
        </div>

        <div className={classes.inputElement}>
          <label className={classes.label}>Email</label>
          <input
            type="email"
            className={classes.input}
            placeholder="Email"
            ref={emailRef}
          />
        </div>
        <div className={classes.inputElement}>
          <label className={classes.label}>Password</label>
          <input
            type="password"
            className={classes.input}
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
      </form>
      <Button text="Sign up" onClick={signup} />
      <div className={classes.switchBox}>
        <h5>Already have an account?</h5>
        <Button alt={true} text="Log in" onClick={switchAuth} />
      </div>
    </div>
  );
};

export default SignupModal;
