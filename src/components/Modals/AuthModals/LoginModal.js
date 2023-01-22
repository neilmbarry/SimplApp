import React, { useRef } from "react";
import configActions from "../../../store/configSlice";
import store from "../../../store/store";
import Button from "../../UI/Button";
import classes from "./LoginModal.module.css";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";

const LoginModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { loading, error, data, postRequest } = useFetch({
    url: "http://127.0.0.1:8000/api/v1/users/login",
  });

  const login = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const body = JSON.stringify({
      username,
      password,
    });

    postRequest(body);
  };

  const switchAuth = () => {
    store.dispatch(configActions.setModal("signup"));
  };

  useEffect(() => {
    if (data?.status === "success") {
      console.log(data);
      store.dispatch(configActions.setModal(null));
      store.dispatch(configActions.setNotification("Success"));
      store.dispatch(configActions.setToken(data.token));
      store.dispatch(configActions.setUserImage(data.image));
    }
    if (error) {
      console.warn(data);
      store.dispatch(configActions.setNotification("Error"));
    }
  }, [error, data]);

  return (
    <div className={classesList}>
      <h2 className={classes.title}>Welcome back</h2>
      <form className={classes.form} autoComplete="off">
        <div className={classes.inputElement}>
          <label className={classes.label}>User name</label>
          <input
            type="text"
            className={classes.input}
            placeholder="User name"
            id="username"
            ref={usernameRef}
            autoComplete="nope"
          />
        </div>
        <div className={classes.inputElement}>
          <label className={classes.label}>Password</label>
          <input
            type="password"
            className={classes.input}
            placeholder="Password"
            ref={passwordRef}
            autoComplete="nope"
          />
        </div>
      </form>
      <Button text={loading ? "LOADING..." : "Log in"} onClick={login} />
      <div className={classes.switchBox}>
        <h5>Don't have an account?</h5>
        <Button alt={true} text="Sign up" onClick={switchAuth} />
      </div>
    </div>
  );
};

export default LoginModal;
