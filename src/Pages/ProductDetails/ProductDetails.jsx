import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './ProductDetails.css';

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoriesNavbar from "../../Components/CategoriesNavbar/CategoriesNavbar";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          setError("Product Not Found");
        } else {
          setProduct(data);
        }
      })
      .catch(() => setError("Product Not Found"));
  }, [id]);

  if (error) return <div className="text-center mt-5"><h3>{error}</h3></div>;
  if (!product) return <div className="text-center mt-5"><h4>Loading....!</h4></div>;

  return (
    <div className="container-fluid p-0">
      <Header />
      <hr/>      

      {/* Main Container */}
      <div className="container my-5">
        <div className="row justify-content-center align-items-start product-details-row">

          {/* LEFT COLUMN: IMAGE & ACTION BUTTONS */}
          <div className="col-lg-5 col-md-6 col-12 text-center mb-4 mb-md-0">
            <div className="image-section">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="imgDetails img-fluid rounded"
              />
            </div>
            <div className="buttons-box d-flex justify-content-between mt-3">
              <button className="cart-btn btn w-50 me-2">Add To Cart</button>
              <button className="buy-btn btn w-50 ms-2">Buy Now</button>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT DETAILS */}
          <div className="col-lg-6 col-md-6 col-12 details-section ps-md-4">
            <h1> {product.title} </h1> <hr />

            <h3> {product.description} </h3> <hr />

            <div className="price-box d-flex align-items-center flex-wrap gap-3">
              <span className="current-price fs-3 fw-bold text-danger">
                ${product.price}
              </span>
              <span className="old-price text-decoration-line-through text-muted fs-5">
                ${(product.price + 500).toFixed(2)}
              </span>
              <span className="discount badge bg-success fs-6">
                {Math.floor(product.discountPercentage)}% OFF
              </span>
            </div>

            <div className="mt-2 text-secondary font-monospace">
              <h3> {product.returnPolicy} </h3>
            </div>

            <hr />

            <div className="rating-box d-flex align-items-center">
              <h3 className="alert alert-info">
                Rating : {product.rating} / 5
              </h3>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;