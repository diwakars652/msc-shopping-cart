import React from "react";
import { useDispatch } from "react-redux";
import Logo from "../../Assets/images/Logo.png";
import { RiShoppingCartLine } from "react-icons/ri";
import "./Navigation.css";
import { GetTotalLength } from "../Helper/Helper";
import { toggleModal } from "../../Redux/actionCreators/modalActions";

const Navigation = () => {
  const length = GetTotalLength();
  const dispatch = useDispatch();
  const handleModalToggle = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="container">
      <nav className="navbar">
        <img src={Logo} alt="Mini Shopping Cart"/>
        <div className="cart">
          <li>
            <RiShoppingCartLine
              className="cart-icon"
              onClick={handleModalToggle}
            />
            <span>{length}</span>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navigation);
