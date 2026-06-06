import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductsDisplay from "../ProductDisplay/ProductDisplay";

const SearchProducts = () => {

  const searchTerm = useSelector(
    (state) => state.searchHome.searchTerm
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {

    if (!searchTerm.trim()) {
      setProducts([]);
      return;
    }

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

  }, [searchTerm]);

  return (
    <ProductsDisplay products={products} />
  );
};

export default SearchProducts;