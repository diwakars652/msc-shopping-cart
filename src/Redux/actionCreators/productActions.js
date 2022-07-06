import * as actionTypes from "../actionTypes/productActionTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

// export const selectedProduct = (product) => {
//   return {
//     type: actionTypes.SELECTED_PRODUCTS,
//     payload: product,
//   };
// };

