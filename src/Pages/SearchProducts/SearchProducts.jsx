import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './SearchProducts.css';

const SearchProducts = ({ search = "" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if search is a valid, non-empty string
    if (search && typeof search === "string" && search.trim() !== "") {
      setLoading(true);
      setError(null);

      fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(search.trim())}`)
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Failed to fetch products. Please try again.");
          }
          return resp.json();
        })
        .then((data) => {
          setProducts(data.products || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setError(err.message);
          setLoading(false);
        });
    } else {
      setProducts([]); 
    }
  }, [search]);

  return (
    <div className="container-fluid py-4">
      <div className="row mt-5">
        
        {/* 1. LOADING STATE */}
        {loading && (
          <div className="col-12 text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {/* 2. ERROR STATE */}
        {!loading && error && (
          <div className="col-12 text-center mt-5">
            <h4 className="text-danger">{error}</h4>
          </div>
        )}

        {/* 3. PRODUCTS GRID */}
        {!loading && !error && products.length > 0 && (
          products.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="product-card">
                <Link to={`/product/${item.id}`} className="text-decoration-none">
                  <div className="img-container">
                    <img src={item.thumbnail} className="search-product-img" alt={item.title} />
                  </div>
                  <div className="product-info">
                    <h5 className="product-title text-dark">{item.title}</h5>
                    <p className="product-price">${item.price}</p>
                    <button className="view-details-btn w-100">View Details</button>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}

        {/* 4. EMPTY / FALLBACK STATE */}
        {!loading && !error && products.length === 0 && (
          <div className="col-12 text-center mt-5">
            <h4 className="text-muted">
              {search && search.trim() !== "" 
                ? `No products found for "${search}"` 
                : "Please type something to search..."}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;