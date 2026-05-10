import React, { useEffect, useState } from "react";
import './AllProducts.css';
// FIX 1: Import Link from react-router-dom, NOT bootstrap-icons
import { Link } from "react-router-dom"; 

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => setProducts(data.products));
  }, []); // FIX 2: Added empty array [] to prevent infinite loops

  return (
    <div className="container-fluid py-4">
      <div className="row">
        {products.map((item, index) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="product-card">
              <Link to={`/product/${item.id}`} className="product-link">
                
                <span className="badge bg-secondary mb-2">
                  Item #{index + 1}
                </span>

                <div className="img-container">
                  {/* FIX 3: Corrected spelling to 'thumbnail' */}
                  <img src={item.thumbnail} className="products-img" alt={item.title} />
                </div>

                <div className="product-info">
                  <h5 className="product-title">{item.title}</h5>
                  <p className="product-price">${item.price}</p>
                  <button className="btn btn-primary btn-sm w-100">View Details</button>
                </div>

              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;