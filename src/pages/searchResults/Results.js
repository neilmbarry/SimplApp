import React from "react";
import classes from "./Results.module.css";
import Result from "./Result";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button";
import store from "../../store/store";
import configActions from "../../store/configSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Results = ({ className, showMap, results, loading }) => {
  const classesList = `${classes.main} ${className} ${
    !showMap && classes.show
  }`;
  const navigate = useNavigate();
  const token = useSelector((state) => state.config.value.token);
  const addHandler = () => {
    if (!token) return store.dispatch(configActions.setModal("signup"));
    navigate("/addProduct");
  };
  return (
    <div className={classesList}>
      {results?.map((res) => {
        return <Result key={res?.slug} info={res} />;
      })}
      {results?.length === 0 && (
        <>
          <div className={classes.nothingBox}>
            <h3>There's nothing here!</h3>
            <h4>
              You can either clear any filters that are selected, reduce your
              search query or:
            </h4>
            <Button text="Add a new product" onClick={addHandler}></Button>
          </div>
        </>
      )}
      {loading && (
        <>
          <Spinner type={"dark"} className={classes.spinner} />
        </>
      )}
    </div>
  );
};

export default Results;
