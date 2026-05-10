import React, { useEffect, useState } from "react";
import "./CategoriesNavbar.css";

const CategoriesNavbar = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const menuData = {
    Cosmetics: ["beauty", "fragrances", "skin-care"],
    HouseProducts: ["furniture", "groceries", "home-decoration", "kitchen-accessories"],
    Mens: ["mens-shirts", "mens-shoes", "mens-watches"],
    Women: ["tops", "womens-dresses", "womens-bags", "womens-shoes", "womens-watches", "womens-jewellery"],
    Electronics: ["smartphones", "mobile-accessories", "laptops", "tablets"],
    SportsVehicle: ["sports-accessories", "sunglasses", "motorcycle", "vehicle"]
  };

  useEffect(() => {
    async function getProducts() {
      if (!category) return;
      try {
        const resp = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await resp.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    getProducts();
  }, [category]);

  return (
    <nav className="nav-container">
      <ul className="navbar">
        {Object.entries(menuData).map(([mainMenu, subMenu]) => (
          <li key={mainMenu} className="menu-item">
            <span className="menu-title">{mainMenu}</span>
            <div className="dropdown">
              {subMenu.map((item) => (
                <p 
                  key={item} 
                  className="dropdown-link"
                  onClick={() => setCategory(item)}
                >
                  {item.replace(/-/g, ' ')}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Products Display */}
      <div className="products-container">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CategoriesNavbar;