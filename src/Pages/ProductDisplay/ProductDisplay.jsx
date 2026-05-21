// ProductsDisplay.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductDisplay.css';

const ProductsDisplay = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If no category is selected yet, reset the layout and skip fetching
    if (!selectedCategory) {
      setProducts([]);
      return;
    }

    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [selectedCategory]); // Trigger fetch every time selectedCategory changes

  return (
    <div className="products-display">
      <h3>Products in "{selectedCategory || 'None Selected'}"</h3>

      {!selectedCategory ? (
        <p>Please select a category to view products.</p>
      ) : loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">

              <div>
                <img src={product.thumbnail} alt={product.title} />
              </div>

              <div>
                <h4 className="product-title">{product.title}</h4>
              </div>

              <div>
                <p className="product-price">${product.price}</p>
              </div>

              <div className="view-details">
                <Link to={`/product/${product.id}`} className="view-details-btn btn btn-primary">
                  View Details
                </Link>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsDisplay;