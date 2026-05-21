import React, { useEffect, useState } from 'react';
import './SidebarFilter.css';

const SidebarFilter = ({ onFilterActiveChange }) => {

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch Categories
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // Fetch Products
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setProducts([]);
      return;
    }

    const fetchPromises = selectedCategories.map((category) =>
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => data.products)
    );

    Promise.all(fetchPromises)
      .then((allProductsArrays) => {
        const combinedProducts = allProductsArrays.flat();
        setProducts(combinedProducts);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [selectedCategories]);

  useEffect(() => {
    onFilterActiveChange?.(selectedCategories.length > 0);
  }, [selectedCategories, onFilterActiveChange]);

  // Checkbox Change
  const handleCategoryChange = (slug) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(slug)) {
        return prevSelected.filter(item => item !== slug);
      } else {
        return [...prevSelected, slug];
      }
    });

  };

  return (
    <div className='container-fluid'>

      <div className="row">
        {/* Sidebar */}
        <div className='col-sm-3'>
          <div className='sidebar'>

            <h2>Sidebar Filter</h2>

            {categories.length > 0 ? (
              categories.map((category) => (
                <div className='category-item' key={category.slug}>
                  <input type="checkbox" id={category.slug}
                    checked={selectedCategories.includes(category.slug)}
                    onChange={() => handleCategoryChange(category.slug)} />

                  <label htmlFor={category.slug}>
                    {category.name}
                  </label>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )
            }
          </div>
        </div>

        {/* Products */}
        <div className='col-sm-9'>
          <div className='products-section'>
            <h2>Products</h2>
            <div className='products-grid'>
              {products.length > 0 ? (
                products.map((product) => (
                  <div className='product-card' key={product.id}>
                    <img src={product.thumbnail}
                      alt={product.title} />

                    <h3>{product.title}</h3>

                    <p>${product.price}</p>
                  </div>
                ))

              ) : (
                <p>Select Category</p>
              )
              }
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};

export default SidebarFilter;