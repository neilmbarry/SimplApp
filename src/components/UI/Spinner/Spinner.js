import classes from "./Spinner.module.css";

const LoadingSpinner = ({ type, className }) => {
  const classesList = `${className} ${classes.main}`;
  return (
    <div className={classesList}>
      <div className={`${classes.spinner} ${classes[type]}`}></div>
    </div>
  );
};

export default LoadingSpinner;
