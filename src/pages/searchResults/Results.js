import React from "react";
import classes from "./Results.module.css";
import Result from "./Result";
import Spinner from "../../components/UI/Spinner/Spinner";

const Results = ({ className, showMap, results, loading }) => {
  const classesList = `${classes.main} ${className} ${
    !showMap && classes.show
  }`;
  console.log(results);
  return (
    <div className={classesList}>
      {results?.map((res) => {
        return <Result key={res?.slug} info={res} />;
      })}
      {loading && (
        <>
          <Spinner type={"dark"} className={classes.spinner} />
        </>
      )}
    </div>
  );
};

export default Results;
