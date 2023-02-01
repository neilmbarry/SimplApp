import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./FaveIcon.module.css";

import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../config/configParameters";
import store from "../../store/store";
import configActions from "../../store/configSlice";
import { useEffect } from "react";

const FaveIcon = ({ className, fave, productId, refresh }) => {
  const classesList = `${classes.main} ${className}`;
  const token = useSelector((state) => state.config.value.token);

  let { loading, error, data, postRequest } = useFetch({
    url: BASE_URL + "users/me/toggleFave",
  });

  const faveHandler = (e) => {
    e.stopPropagation();

    if (!token) {
      return store.dispatch(configActions.setModal("signup"));
    }
    postRequest(
      JSON.stringify({
        productId,
      }),
      token,
      "PATCH"
    );
  };

  useEffect(() => {
    console.log("calling faveicon useeffect");
    if (loading) return;
    if (data?.status === "success") {
      store.dispatch(configActions.setFaves(data.user.faves));
      store.dispatch(
        configActions.setNotification(
          data.faveAdded ? "Added to favourites" : "Removed from favourites"
        )
      );
      data.status = null;
    }
  }, [data?.status, refresh, loading, data]);

  return (
    <div className={classesList} onClick={faveHandler}>
      <FontAwesomeIcon icon={fave ? faHeart : faHeartEmpty} />
    </div>
  );
};

export default FaveIcon;
