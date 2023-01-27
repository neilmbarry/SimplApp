import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../components/UI/Button";
import classes from "./BookingColumn.module.css";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const BookingColumn = ({ className, price, discount, onConfirm, onFave }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.priceBox}>
        <h3>
          <span className={classes.oldPrice}>${price}</span> $
          {price - (discount ? 10 : 0)} total
        </h3>
        <h4>View price details</h4>
      </div>
      <div className={classes.tripOptions}>
        <div className={classes.datesBox}>
          <h4>Trip start</h4>
          <div className={classes.inputs}>
            <input type="date" defaultValue="2022-06-03" />
            <input type="time" defaultValue="10:00" />
          </div>
        </div>
        <div className={classes.datesBox}>
          <h4>Trip end</h4>
          <div className={classes.inputs}>
            <input type="date" defaultValue="2022-06-03" />
            <input type="time" defaultValue="10:00" />
          </div>
        </div>
        {/* <div className={classes.datesBox}>
          <h5>Pickup & return location</h5>
          <div className={classes.inputs}>
            <select>
              <option value="">Airport</option>
              <option value="">Airport</option>
              <option value="">Airport</option>
            </select>
          </div>
        </div> */}
        {discount && (
          <div className={classes.discountBox}>
            <div className={classes.discount}>
              <h3>{discount} discount</h3>
            </div>
            <div className={classes.discountValue}>
              <h3>$10</h3>
            </div>
          </div>
        )}

        <Button
          text="Continue"
          className={classes.continue}
          onClick={onConfirm}
        />
      </div>
      <div className={classes.cancellationBox}>
        <FontAwesomeIcon icon={faThumbsUp} />
        <div className={classes.cancellationText}>
          <h5>Free cancellation</h5>
          <h4>Full refund up to 2 days before booking</h4>
        </div>
      </div>

      <div className={classes.distanceBox}>
        <h6>INSURANCE & PROTECTION</h6>
        <br />
        <h4>Insurance via Travelers</h4>
      </div>
      <div className={`${classes.distanceBox} ${classes.faveCont}`}>
        <Button
          text="Add to favourites"
          className={classes.favButton}
          onClick={onFave}
        />
      </div>
    </div>
  );
};

export default BookingColumn;
