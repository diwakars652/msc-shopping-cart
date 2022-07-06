import * as actionTypes from "../actionTypes/cartAcionTypes";

export const addToCart = (content) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: content,
  };
};

export const increaseOrder = (content) => {
  return {
    type: actionTypes.INCREASE_ORDER,
    payload: content,
  };
};

export const decreaseOrder = (content) => {
  return {
    type: actionTypes.DECREASE_ORDER,
    payload: content,
  };
};

export const changeQuantity = (content) => {
  return {
    type: actionTypes.CHANGE_QUANTITY,
    payload: content,
  };
};

export const removeItem = (content) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: content,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
