import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './ProductDetails.css';

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoriesNavbar from "../../Components/CategoriesNavbar/CategoriesNavbar";

const ProductDetails = () => {

  const { id } = useParams(); // Grabs the ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(resp => resp.json())
      .then(data => setProduct(data))

      .catch(() => setError("Product Not Found"))

  }, [id]);

  if (!product) return (<div> Loading....! </div>)

  if (error) return <div> {error} </div>

  return (
    <div className="container-fluid">

      <Header />
      <CategoriesNavbar />

      <div className="product-card">

        <div className="row align-items-start">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-6 col-12">

            <div className="image-section">
              <img
                src={product.thumbnail}
                alt="Product"
                className="imgDetails"
              />
            </div>

            <div className="buttons-box">
              <button className="cart-btn">Add To Cart</button>
              <button className="buy-btn">Buy Now</button>
            </div>

          </div>

          {/* RIGHT DETAILS */}
          <div className="col-lg-6 col-md-6 col-12 details-section border">

            <h2 className="product-title">
              {product.title}
            </h2>

            <p className="description">
              {product.description}
            </p>            

            <div className="price-box">
              <span className="current-price">
                {product.price}
              </span>

              <span className="old-price">
                {product.price + 500}
              </span>

              <span className="discount">
                {Math.floor(product.discountPercentage)}% OFF
              </span>

              <span>
                {product.returnPolicy}
              </span>
            </div>

            <div className="rating-box">
             <span> {product.rating} </span>
            </div>           

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default ProductDetails;