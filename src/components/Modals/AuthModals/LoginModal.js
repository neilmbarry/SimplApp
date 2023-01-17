import React, { useRef } from "react";
import configActions from "../../../store/configSlice";
import store from "../../../store/store";
import Button from "../../UI/Button";
import classes from "./LoginModal.module.css";

const LoginModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const emailRef = useRef();
  const passwordRef = useRef();
  const login = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  };

  const switchAuth = () => {
    store.dispatch(configActions.setModal("signup"));
  };
  return (
    <div className={classesList}>
      <h2 className={classes.title}>Welcome back</h2>
      <form className={classes.form}>
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
      <Button text="Log in" onClick={login} />
      <div className={classes.switchBox}>
        <h5>Don't have an account?</h5>
        <Button alt={true} text="Sign up" onClick={switchAuth} />
      </div>
    </div>
  );
};

export default LoginModal;
