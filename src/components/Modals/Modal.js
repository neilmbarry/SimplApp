import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import FullBackdrop from "./FullBackdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import store from "../../store/store";
import configActions from "../../store/configSlice";
import { useSelector } from "react-redux";
import LoginModal from "./AuthModals/LoginModal";
import SignupModal from "./AuthModals/SignupModal";
import FilterModal from "../../pages/searchResults/Filter/FilterModal";
import CheckoutModal from "./CheckoutModal/CheckoutModal";
import SearchMobile from "../Search/SearchMobile";

const modalReference = {
  login: <LoginModal />,
  signup: <SignupModal />,
  filter: <FilterModal />,
  checkout: <CheckoutModal />,
  mobileSearch: <SearchMobile />,
};

const Modal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const modal = useSelector((state) => state.config.value.modal);
  const close = () => {
    store.dispatch(configActions.setModal(false));
  };

  return ReactDOM.createPortal(
    <>
      {modal && (
        <>
          <FullBackdrop onClick={close} />
          <div className={classesList}>
            <FontAwesomeIcon
              icon={faClose}
              className={classes.close}
              onClick={close}
            />
            {modalReference[modal]}
          </div>
        </>
      )}
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
