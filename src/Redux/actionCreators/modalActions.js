import * as actionTypes from "../actionTypes/modalActionTypes";

export const toggleModal = () => {
  return {
    type: actionTypes.TOGGLE_MODAL,
  };
};

export const openCheckoutModal = () => {
  return {
    type: actionTypes.OPEN_CHECKOUT_MODAL,
  };
};

export const closeCheckoutModal = () => {
  return {
    type: actionTypes.CLOSE_CHECKOUT_MODAL,
  };
};
