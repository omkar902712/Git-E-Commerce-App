import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesNavbar = () => {

  const [categories, setCategories] = useState([]);    

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="navbar">
      {categories.map((item, index) => (
        <div key={index}>               
          <Link to={item.url}> {item.name} </Link>          
        </div>
      ))}

    </div>
  );
};

export default CategoriesNavbar;