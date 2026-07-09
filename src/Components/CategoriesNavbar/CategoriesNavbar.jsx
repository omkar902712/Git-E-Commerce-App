import React, { useEffect, useState } from 'react';
import './CategoriesNavbar.css';

const CategoriesNavbar = ({ selectedCategory, onCategorySelect }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        // Normalize API response which may be an array of strings or objects
        const mapped = data.map((cat) => {
          if (typeof cat === 'string') {
            return {
              slug: cat,
              name: cat.charAt(0).toUpperCase() + cat.slice(1),
            };
          }

          // cat is an object
          return {
            slug: cat.slug || String(cat),
            name: cat.name || (cat.slug ? cat.slug.charAt(0).toUpperCase() + cat.slug.slice(1) : String(cat)),
          };
        });

        setCategories(mapped);
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
      {categories.map((category) => (

        <button
          key={category.slug}
          className={`category-btn ${selectedCategory === category.slug ? 'active' : ''}`}
          onClick={() => onCategorySelect(category.slug)}
        >
          {category.name}
        </button>

      ))}

    </div>

  );

};

export default CategoriesNavbar;