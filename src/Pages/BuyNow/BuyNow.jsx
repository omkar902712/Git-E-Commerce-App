import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LogoImg from "../../assets/Images/Header/Logo.jpg";

import "./BuyNow.css";

const BuyNow = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          setError("Product Not Found");
        } else {
          setProduct(data);
        }
      })
      .catch(() => {
        setError("Product Not Found");
      });
  }, [id]);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = product
    ? (product.price * quantity).toFixed(2)
    : 0;

  return (
    <div className="container-fluid buynow-container">

      {/* Logo */}
      <div className="logo-wrapper">
        <Link to="/">
          <img src={LogoImg} alt="ShopVibe"
            className="buynow-logo" />
        </Link>
      </div>

      <hr />

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {product && (
        <div className="row g-4">

          {/* Product Details */}
          <div className="col-lg-8">
            <div className="product-card">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <img src={product.thumbnail}
                    alt={product.title} className="product-image"
                  />
                </div>

                <div className="col-md-7">
                  <h2 className="product-title">
                    {product.title}
                  </h2>

                  <p className="product-description">
                    {product.description}
                  </p>

                  <div className="price-section">
                    <span className="current-price">
                      ${product.price}
                    </span>

                    <span className="old-price">
                      ${(product.price + 500).toFixed(2)}
                    </span>

                    <span className="discount-badge">
                      {Math.floor(
                        product.discountPercentage
                      )}
                      % OFF
                    </span>

                  </div>

                  <div className="rating-box">
                    {product.rating} / 5
                  </div>

                  <div className="return-policy">
                    <h3>Return Policy :</h3>
                    <p>{product.returnPolicy}</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Price Details */}
          <div className="col-lg-4">
            <div className="price-details-card">
              <h3>Price Details</h3>
              <hr />
              <div className="price-row">
                <span>Price</span>
                <span>${product.price}</span>
              </div>

              <div className="price-row quantity-row">
                <span>Quantity</span>
                <div className="quantity-box">
                  <button onClick={decreaseQty}> - </button>

                  <span>{quantity}</span>

                  <button onClick={increaseQty}> + </button>
                </div>
              </div>

              <hr />

              <div className="price-row total-row">
                <span>Total Amount</span>
                <span>${totalPrice}</span>
              </div>

              <button className="place-order-btn">
                Place Order
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyNow;