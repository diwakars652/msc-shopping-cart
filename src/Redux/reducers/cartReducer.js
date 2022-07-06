import * as actionTypes from "../actionTypes/cartAcionTypes";

let initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      let found = state.cart.find((item) => item.id === payload.id);
      if (found) {
        payload.quantity++;
        return state;
      } else {
        payload.quantity = 1;
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      }

    case actionTypes.INCREASE_ORDER:
      state.cart.map((item) =>
        item.id === payload.id ? item.quantity++ : null
      );
      return {
        ...state,
        cart: [...state.cart],
      };

    case actionTypes.DECREASE_ORDER:
      state.cart.map((item) =>
        item.quantity > 0 && item.id === payload.id ? item.quantity-- : null
      );
      state.cart.forEach((item) => {
        if (item.quantity === 0) {
          state.cart.splice(state.cart.indexOf(item), 1);
        }
      });
      return {
        ...state,
        cart: [...state.cart],
      };

    case actionTypes.CHANGE_QUANTITY:
      state.cart.forEach((item) => {
        if (item.id === payload.id) {
          item.quantity = parseInt(payload.value);
        }
      });
      return {
        ...state,
        cart: [...state.cart],
      };

    case actionTypes.REMOVE_ITEM:
      state.cart.forEach((item) => {
        if (item.id === payload) {
          state.cart.splice(state.cart.indexOf(item), 1);
        }
      });
      return {
        ...state,
        cart: [...state.cart],
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
