import React from "react";
import "./CartIsZero.css";

import { Link } from "react-router-dom";
import LogoImg from "../../assets/Images/Header/Logo.jpg";
import CartIsEmpty from "../../assets/Images/Cart/CartIsEmpty.png";

const CartIsZero = () => {
  return (
    <div className="empty-cart-container">
      <Link to="/">
        <img src={LogoImg} 
          alt="ShopVibe" className="empty-cart-logo" />
      </Link>

      <hr />

      <div className="empty-cart-content">
        <img src={CartIsEmpty}
          alt="Empty Cart" className="empty-cart-image" />

        <h2> Your Cart Is Empty </h2>

        <p>
          Just relax, let us help you find some first-class products
        </p>

        <Link to="/">
          <button className="shopping-btn">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartIsZero;