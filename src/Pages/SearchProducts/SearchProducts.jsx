import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './SearchProducts.css';

const SearchProducts = ({ search }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Only fetch if the search string is not empty
    if (search && search.trim() !== "") {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((resp) => resp.json())
        .then((data) => setProducts(data.products));
    } else {
      setProducts([]); // Clear products if search is empty
    }
  }, [search]);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        {/* TERNARY OPERATOR: Check if there are products to display */}
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="product-card">
                <Link to={`/product/${item.id}`} className="text-decoration-none">
                  <div className="img-container">
                    <img src={item.thumbnail} className="search-product-img" alt={item.title} />
                  </div>
                  <div className="product-info">
                    <h5 className="product-title">{item.title}</h5>
                    <p className="product-price">${item.price}</p>
                    <button className="view-details-btn w-100">View Details</button>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          /* DISPLAYED WHEN LENGTH === 0 */
          <div className="col-12 text-center mt-5">
            <h4 className="text-muted">
              {search ? `No products found for "${search}"` : "Please type something to search..."}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;