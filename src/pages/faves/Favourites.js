import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { BASE_URL } from "../../config/configParameters";
import useFetch from "../../hooks/useFetch";
import Result from "../searchResults/Result";
import Results from "../searchResults/Results";
import classes from "./Favourites.module.css";

const Favourites = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const { loading, error, data, getRequest } = useFetch({
    url: BASE_URL + "users/me/getFaves",
  });
  const token = useSelector((state) => state.config.value.token);
  const refresh = useSelector((state) => state.config.value.refresh);

  const favesJSX = data?.faves?.map((prod) => {
    return (
      <Result
        info={prod}
        className={classes.result}
        refresh={refreshRequest}
        key={prod.slug}
      />
    );
  });

  function refreshRequest() {
    getRequest(token);
  }

  useEffect(() => {
    getRequest(token);
  }, [refresh]);
  return (
    <div className={classesList}>
      <NavBar search={false} />
      <div className={classes.pageContainer}>
        <h2>Your favourites</h2>

        <div className={classes.favesContainer}>{favesJSX}</div>
      </div>
    </div>
  );
};

export default Favourites;
