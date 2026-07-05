import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductsDisplay from "../ProductDisplay/ProductDisplay";

const SearchProducts = () => {

  // Get search text from redux store
  const searchTerm = useSelector(
    (state) => state.searchHome.searchTerm
  );

  // stored search products
  const [products, setProducts] = useState([]);

  useEffect(() => {

    // If search box is empty, clear products 
    if (!searchTerm.trim()) {
      setProducts([]);
      return;
    }  

    // Wait 500ms before making API call
    const timer = setTimeout(() => {

      fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(
          searchTerm
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products || []);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);

    // Cleanup function 
    // If user types again before 500ms,
    // cancel the previous timer
    return () => {
      clearTimeout(timer);
    };

  }, [searchTerm]);

  return (
    <ProductsDisplay products={products} />
  );
};

export default SearchProducts;