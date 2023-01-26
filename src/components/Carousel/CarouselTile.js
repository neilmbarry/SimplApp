import React from "react";
import classes from "./CarouselTile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import images from "../../helpers/imagesObj";
import { useSelector } from "react-redux";
import store from "../../store/store";
import newProductActions from "../../store/newProductSlice";

const CarouselTile = ({
  picture,
  title,
  fraction,
  taller,
  width,
  product,
  userSelect,
  onClick,
}) => {
  const imageSelected = useSelector((state) => state.newProduct.value.image);
  // console.log(imageSelected);
  const clickHandler = () => {
    if (!userSelect) return;
    store.dispatch(
      newProductActions.updateInfo({
        image: picture,
      })
    );
    onClick();
  };
  const tileWidth = (width || 1000) / fraction - 12;
  const style = { width: `${tileWidth}px` };
  return (
    <div className={classes.tile} style={style} onClick={clickHandler}>
      {imageSelected === picture && userSelect && (
        <div className={classes.selected}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      )}
      <div className={taller ? classes.picTaller : classes.pic}>
        <img src={images[picture]} alt="" />
      </div>
      {title && <h4 className={classes.title}>{title}</h4>}
      {product && (
        <div className={classes.product}>
          <h3 className={classes.prodTitle}>{product.title}</h3>
          <div className={classes.ratingBox}>
            {product.rating ? (
              <h4>{product.rating.toFixed(1)}</h4>
            ) : (
              <h4 className={classes.purple}>New!</h4>
            )}
            <FontAwesomeIcon icon={faStar} className={classes.star} />
            <h4>({product.reviews || "No"} trips)</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselTile;
