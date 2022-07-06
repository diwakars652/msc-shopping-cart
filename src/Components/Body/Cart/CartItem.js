import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  changeQuantity,
  removeItem,
} from "../../../Redux/actionCreators/cartActions";
import { SubTotalCalculator } from "../../Helper/Helper";
import "./Cart.css";

const CartItem = (props) => {
  const { id, title, image, price, quantity } = props.item;
  const [value, setValue] = useState(quantity);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value > 0) {
      let content = { id, value: e.target.value };
      dispatch(changeQuantity(content));
    }
  };
  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  useEffect(() => {
    setValue(quantity);
  }, [quantity]);
  const subTotal = SubTotalCalculator(price, quantity);
  return (
    <div className="cart-container">
      <img className="cart-image" src={image} alt="" />
      <div className="close-box">
        <button className="cart-close-btn" onClick={handleRemoveItem}>
          X
        </button>
      </div>
      <h6 className="cart-title">{title}</h6>
      <div className="cart-content">
        <p> $ {price} X </p>
        <input
          type="number"
          min="1"
          name="quantity"
          onChange={handleChange}
          value={value}
          id="quantity"
        />
        <p> &nbsp; = $ {subTotal}</p>
      </div>
    </div>
  );
};

export default CartItem;
