import React from "react";
import classes from "./Results.module.css";
import Result from "./Result";

const Results = ({ className, showMap, results }) => {
  const classesList = `${classes.main} ${className} ${
    !showMap && classes.show
  }`;
  console.log(results);
  return (
    <div className={classesList}>
      {results?.map((res) => {
        return <Result key={res?.slug} info={res} />;
      })}
    </div>
  );
};

export default Results;
