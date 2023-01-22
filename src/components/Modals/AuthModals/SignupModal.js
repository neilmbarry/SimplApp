import React, { useRef } from "react";
import { useState } from "react";
import configActions from "../../../store/configSlice";
import store from "../../../store/store";
import Button from "../../UI/Button";
import classes from "./SignupModal.module.css";

import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";

const SignupModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const firstRef = useRef();
  const lastRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { data, loading, error, postRequest } = useFetch({
    url: "http://127.0.0.1:8000/api/v1/users/signup",
  });

  if (error) {
    console.error(error);
  }

  const signup = async () => {
    const newUser = {
      firstName: firstRef.current.value,
      lastName: lastRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    postRequest(JSON.stringify(newUser));
  };
  const switchAuth = () => {
    store.dispatch(configActions.setModal("login"));
  };

  useEffect(() => {
    if (data?.status === "success") {
      console.log(data);
      store.dispatch(configActions.setModal(null));
      store.dispatch(configActions.setNotification("Success"));
      store.dispatch(configActions.setToken(data.token));
    }
    if (error) {
      console.warn(data);
      store.dispatch(configActions.setNotification("Error"));
    }
  }, [error, data]);

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
          <label className={classes.label}>User name</label>
          <input
            type="text"
            className={classes.input}
            placeholder="User name"
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
      <Button text={loading ? "loading..." : "Sign up"} onClick={signup} />
      <div className={classes.switchBox}>
        <h5>Already have an account?</h5>
        <Button alt={true} text="Log in" onClick={switchAuth} />
      </div>
    </div>
  );
};

export default SignupModal;
