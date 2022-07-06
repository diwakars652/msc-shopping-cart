import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";

import { TotalCalculator } from "../../Helper/Helper";
import {
  openCheckoutModal,
  toggleModal,
} from "../../../Redux/actionCreators/modalActions";
import { clearCart } from "../../../Redux/actionCreators/cartActions";

const CartSummary = () => {
  let subTotal = TotalCalculator();
  const dispatch = useDispatch();
  const handleCheckoutModal = () => {
    dispatch(openCheckoutModal());
    dispatch(clearCart());
    dispatch(toggleModal());
  };

  return (
    <div className="cart-summary">
      <hr />
      <p className="to-right">Sub-Total = ${subTotal}</p>
      <p className="to-right">Delivery-Charge = $50</p>
      <hr />
      <p className="to-right">Grand-Total = ${subTotal + 20}</p>
      <Link to="/checkout" className="link">
        <button className="checkout-btn" onClick={handleCheckoutModal}>Proceed to checkout</button>
      </Link>
    </div>
  );
};

export default CartSummary;
