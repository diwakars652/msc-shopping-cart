import React from "react";
import ProductListing from "./Body/Products/ProductListing";
// import ProductComponent from './Body/Products/ProductComponent';
import Navigation from "./Header/Navigation";
import { useDispatch } from "react-redux";
import { GetModalState } from "../Components/Helper/Helper";
import Cart from "./Body/Cart/Cart";
import "./MainComponent.css";
import { toggleModal } from "../Redux/actionCreators/modalActions";
import { useDelayUnmount } from "../Components/Helper/Helper";

const MainComponent = () => {
  const show = GetModalState();
  const showDiv = useDelayUnmount(show, 2000);
  const dispatch = useDispatch();
  const handleModalToggle = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      {show ? (
        <div onClick={handleModalToggle} className="back-drop"></div>
      ) : null}
      <Navigation />
      <ProductListing />
      {/* <ProductComponent /> */}
      {showDiv && <Cart show={show} />}
    </>
  );
};

export default MainComponent;
