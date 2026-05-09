import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CategoriesNavbar.css';

const CategoriesNavbar = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  const menuData = {
    Cosmetics: [
      "beauty",
      "fragrances",
      "skin-care"
    ],

    HouseProducts: [
      "furniture",
      "groceries",
      "home-decoration",
      "kitchen-accessories"
    ],

    Mens: [
      "mens-shirts",
      "mens-shoes",
      "mens-watches"
    ],

    Women: [
      "tops",
      "womens-dresses",
      "womens-bags",
      "womens-shoes",
      "womens-watches",
      "womens-jewellery" // corrected
    ],

    Electronics: [
      "smartphones",
      "mobile-accessories",
      "laptops",
      "tablets"
    ],

    SportsVehicle: [
      "sports-accessories",
      "sunglasses",
      "motorcycle",
      "vehicle"
    ]
  };

  //https://dummyjson.com/products/categories

  // fetch products when category changes 
  useEffect(() => {
    async function getProducts() {

      // Nothing, if category is empty
      if (!category) return;

      const resp = await fetch(
        `https://dummyjson.com/products/categories/${category}`
      );

      const data = await resp.json();
      setProducts(data.products);
    }

    getProducts();

  }, [category]);

  return (
    <div>
      <ul className="navbar">
        {Object.entries(menuData).map(([mainMenu, subMenu]) => (
          <li key={mainMenu} className="menu-item">
           <span> {mainMenu} </span>

            {/* Drop Down */}
            <div className="dropdown">
              {subMenu.map((item) => (
                <p key={item} onMouseOver={()=>setCategory(item)}>
                  {item}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Product Review */}
      <div>

      </div>
    </div>
  );
};

export default CategoriesNavbar;