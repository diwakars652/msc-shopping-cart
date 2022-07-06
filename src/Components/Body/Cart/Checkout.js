import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { closeCheckoutModal } from "../../../Redux/actionCreators/modalActions";
import { GetCheckOutModalState } from "../../Helper/Helper";
import "./Cart.css";

const Checkout = () => {
  const showCheckout = GetCheckOutModalState();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCheckoutModal = () => {
    dispatch(closeCheckoutModal());
    setTimeout(() => {
      history.push("/");
    }, 800);
  };
  return (
    <div>
      {showCheckout ? (
        <div onClick={handleCheckoutModal} className="proceed-checkout"></div>
      ) : null}
      <div
        style={{
          opacity: showCheckout ? "1" : 0,
          zIndex: showCheckout ? "100" : "-1",
          transform: showCheckout ? "translate(0vh)" : "translate(100vh)",
        }}
        className="checkout-popup"
      >
        <h5>Order Placed!</h5>
        <button onClick={handleCheckoutModal} className="cart-close-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default Checkout;
