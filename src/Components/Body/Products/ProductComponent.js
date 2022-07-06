import React from "react";
import "./ProductComponent.css";

import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseOrder,
  increaseOrder,
} from "../../../Redux/actionCreators/cartActions";
import { CheckItemInCart } from "../../Helper/Helper";

const ProductComponent = (props) => {
  // const show = GetModalState();
  // console.log(props.products)
  const renderList = props.products.map((product) => {
    const { id, image, title, price } = product;
    let quantity = CheckItemInCart(id);
    return (
      <div className="card" key={id}>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta-price">${price}</div>
          {quantity ? (
            <IncreaseOrder item={product} quantity={quantity} />
          ) : (
            <AddToCart item={product} />
          )}
        </div>
      </div>
    );
  });
// console.log(renderList)
  return <>{renderList}</>;
};

const AddToCart = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(props.item));
  };
  return (
    <div
      onClick={handleAddToCart}
      className="cart-btn"
    >
      Add to Cart
    </div>
  );
};

const IncreaseOrder = (props) => {
  const dispatch = useDispatch();
  const { item, quantity } = props;
  const handleIncreaseOrder = () => {
    dispatch(increaseOrder(item));
  };
  const handleDecreaseOrder = () => {
    dispatch(decreaseOrder(item));
  };
  return (
      <div className="increase-order-box">
        <button onClick={handleDecreaseOrder}>-</button>
        <div className="meta-quantity"> {quantity} Item In Cart</div>
        <button onClick={handleIncreaseOrder}>+</button>
      </div>
  );
};

export default ProductComponent;
