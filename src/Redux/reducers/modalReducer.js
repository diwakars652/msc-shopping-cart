import * as actionTypes from "../actionTypes/modalActionTypes";

let initialState = {
  modalState: false,
  checkoutModalState: true,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalState: !state.modalState,
      };
    case actionTypes.OPEN_CHECKOUT_MODAL:
      return {
        ...state,
        checkoutModalState: true,
      };
    case actionTypes.CLOSE_CHECKOUT_MODAL:
      return {
        ...state,
        checkoutModalState: false,
      };
    default:
      return state;
  }
};
