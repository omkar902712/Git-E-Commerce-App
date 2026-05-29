import React, { useEffect, useState } from "react";

import ProductsDisplay from "../ProductDisplay/ProductDisplay";

const SearchProducts = ({ search }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    if (!search?.trim()) {

      setProducts([]);

      return;

    }

    fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
    )
      .then((res) => res.json())

      .then((data) => {

        setProducts(data.products || []);

      })

      .catch((err) => console.log(err));

  }, [search]);

  return (

    <ProductsDisplay products={products} />

  );

};

export default SearchProducts;