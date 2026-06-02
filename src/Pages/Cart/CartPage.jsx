import React from "react";
import { useSelector } from "react-redux";

import CartIsZero from "./CartIsZero";

import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector(
    (state) => state.cartHome.cartItems
  );

  if (cartItems.length === 0) {
    return <CartIsZero />;
  }

  return (
    <div className="cart_page">
      <h1>Cart Products</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CartPage;