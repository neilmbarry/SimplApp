import React from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { BASE_URL } from "../../config/configParameters";
import useFetch from "../../hooks/useFetch";
import Result from "../searchResults/Result";
import Results from "../searchResults/Results";
import classes from "./Favourites.module.css";

const Favourites = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const { loading, error, data, getRequest } = useFetch({
    url: BASE_URL + "products",
  });

  console.log(data);

  const favesJSX = data?.products?.map((prod) => {
    return <Result info={prod} className={classes.result} />;
  });

  useEffect(() => {
    if (!data) {
      getRequest();
    }
  });
  return (
    <div className={classesList}>
      <NavBar search={false} />
      <div className={classes.pageContainer}>
        <h2>Neil's favourites</h2>

        <div className={classes.favesContainer}>
          {favesJSX}
          {/* <Results results={data?.products} /> */}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
