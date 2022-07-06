import { useDispatch } from "react-redux";
import { clearCart } from "../../../Redux/actionCreators/cartActions";
// import { toggleModal } from "../../../Redux/actionCreators/modalActions";
import { LoadCart } from "../../Helper/Helper";
import "./Cart.css";
import Summary from "./Summary";
import CartItem from "./CartItem";

const Cart = ({ show }) => {
  const dispatch = useDispatch();
  // const handleModalToggle = () => {
  //   dispatch(toggleModal());
  // };
  const cart = LoadCart();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div
      style={{
        opacity: show ? "1" : 0,
        zIndex: show ? "10" : "-1",
        transform: show ? "translate(0vh)" : "translate(100vh)",
      }}
      className="modal-wrapper"
    >
      <div className="modal-header">
      </div>
      <div className="modal-content">
        {cart.length ? (
          <div>
            <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
            <Summary />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
