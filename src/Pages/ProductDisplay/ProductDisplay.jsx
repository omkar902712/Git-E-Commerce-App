import React, { useEffect, useState } from 'react';
import './ProductDisplay.css';
import { Link } from 'react-router-dom';

const ProductsDisplay = ({
  selectedCategory,
  products,
  searchTerm = '',
}) => {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {

    // Sidebar products
    if (products && products.length > 0) {
      setAllProducts(products);
      return;
    }

    // Category products
    if (selectedCategory) {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setAllProducts(data.products || []);
        });
    }
  }, [selectedCategory, products]);

  // Search filter
  const filteredProducts = allProducts.filter((item) =>
    item?.title?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        {filteredProducts.map((item, index) => (          
          <div key={item.id}
            className="col-12 col-sm-6 col-lg-4 d-flex">
            <div className="product-card w-100">
              <Link to={`/product/${item.id}`}
                className="product-link">
                <span className="badge bg-secondary product-badge">
                  Item #{index + 1}
                </span>

                <div className="img-container">
                  <img src={item.thumbnail}
                    alt={item.title} className="products-img" />
                </div>

                <div className="product-info">
                  <h5 className="product-title">
                    {item.title}
                  </h5>

                  <h3 className="product-price">
                    ${item.price}
                  </h3>

                  <div className="rating-box">
                    <span className="rating-text">
                      ⭐ {item.rating} / 5
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;