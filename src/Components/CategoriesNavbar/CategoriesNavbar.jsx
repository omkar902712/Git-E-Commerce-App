import React, { useEffect, useState } from 'react';
import './CategoriesNavbar.css';

const CategoriesNavbar = ({ selectedCategory, onCategorySelect }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });

  }, []);

  return (

    <div className="categories-navbar">

      {/* All Products Button */}
      <button
        className={`category-btn ${selectedCategory === '' ? 'active' : ''}`}
        onClick={() => onCategorySelect('')}
      >
        All
      </button>

      {/* Categories */}
      {categories.map((item) => (

        <button
          key={item.slug}
          className={`category-btn ${selectedCategory === item.slug ? 'active' : ''}`}
          onClick={() => onCategorySelect(item.slug)}
        >
          {item.name}
        </button>

      ))}

    </div>

  );

};

export default CategoriesNavbar;