import React, { useRef } from "react";
import configActions from "../../../store/configSlice";
import store from "../../../store/store";
import Button from "../../UI/Button";
import classes from "./LoginModal.module.css";

const LoginModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const usernameRef = useRef();
  const passwordRef = useRef();
  const login = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log(username, password);
  };

  const switchAuth = () => {
    store.dispatch(configActions.setModal("signup"));
  };
  return (
    <div className={classesList}>
      <h2 className={classes.title}>Welcome back</h2>
      <form className={classes.form}>
        <div className={classes.inputElement}>
          <label className={classes.label}>User name</label>
          <input
            type="text"
            className={classes.input}
            placeholder="User name"
            id="username"
            ref={usernameRef}
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
