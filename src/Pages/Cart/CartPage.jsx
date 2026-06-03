import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

import CartIsZero from "./CartIsZero";

// Logo
import LogoImg from "../../assets/Images/Header/Logo.jpg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartPage = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cartHome.cartItems
  );

  if (cartItems.length === 0) {
    return <CartIsZero />;
  }

  return (
    <div className="container-fluid cart-page">
      <Link to="/">
        <img src={LogoImg} alt="ShopVibe"
          className="cart-logo" />
      </Link>

      <hr />

      <div className="row">
        {/* Left Side */}
        <div className="col-lg-8">
          <h2 className="cart-heading">
            Cart Products ({cartItems.length})
          </h2>

          {cartItems.map((item) => (
            <div className="cart-card" key={item.id}>
              <div className="cart-image-section">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-image"
                />
              </div>

              <div className="cart-details">
                <h4>{item.title}</h4>

                <p>
                  <strong>Category:</strong> {item.category}
                </p>

                <p>
                  <strong>Price:</strong> ${item.price}
                </p>

                <p>
                  <strong>Rating:</strong> {item.rating} / 5
                </p>

                <p>
                  <strong>Return Policy:</strong>{" "}
                  {item.returnPolicy}
                </p>

                <button className="btn btn-danger remove-btn"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="col-lg-4">
          <div className="cart-summary">
            <h3>Order Summary</h3>

            <hr />

            <h5>
              Total Items : {cartItems.length}
            </h5>

            <button className="btn btn-success checkout-btn">
              Proceed To Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;