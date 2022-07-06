import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

export const LoadCart = () => {
  const cart = useSelector((state) => (state ? state.cartReducer.cart : null));
  return cart;
};

export const CheckItemInCart = (id) => {
  const cart = LoadCart();
  let quantity;
  cart.forEach((item) => {
    if (item.id === id) {
      quantity = item.quantity;
      return quantity;
    } else {
      return null;
    }
  });
  return quantity;
};

export const GetTotalLength = () => {
  const cart = LoadCart();
  return cart.length
    ? cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0)
    : 0;
};

export const GetModalState = () => {
  return useSelector((state) =>
    state ? state.modalReducer.modalState : false
  );
};

export const GetCheckOutModalState = () => {
  return useSelector((state) =>
    state ? state.modalReducer.checkoutModalState : false
  );
};

export const SubTotalCalculator = (price, quantity) => {
  return price * quantity.toFixed(2);
};

export const TotalCalculator = () => {
  const cart = LoadCart();
  return cart
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);
};

export function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted) {
      setShowDiv(true);
    } else if (!isMounted) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime); 
    }
    return () => clearTimeout(timeoutId); 
  }, [isMounted, delayTime, showDiv]);
  return showDiv;
}
