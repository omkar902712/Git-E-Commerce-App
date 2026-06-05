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
  // used to redux dispatch the action to remove item from cart
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cartHome.cartItems
  );

  if (cartItems.length === 0) {
    return <CartIsZero />;
  }

  // calculate total price of all items in cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price, 0);

  // Free delivery for orders above $100
  const deliverycharges = totalPrice > 100 ? 50 : 0;

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
                <img src={item.thumbnail}
                  alt={item.title} className="cart-image" />
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

                <button className="btn btn-success fs-3 border-t-neutral-50 remove_btn"
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
            <h3 className="text-success text-3xl font-bold mb-4">
              Order Summary
            </h3>

            <hr />

            <h3>
              Product Details (Total Items : {cartItems.length})
            </h3>

            <hr className="my-4 border-gray-400" />

            <h3> Delivery Charges : {deliverycharges} </h3>
            <span className="text-lg text-red-500">
              Product greater than 100, then 50 apply
            </span>

            <hr className="my-4 border-gray-400" />

            <h3> Product Price : {totalPrice} </h3>


            <button className="bg-purple-600 text-white py-3 rounded-md font-medium !text-2xl checkout-btn mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;