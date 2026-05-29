import React, { useEffect, useState } from 'react';

import './SidebarFilter.css';

const SidebarFilter = ({
  setSidebarProducts,
  onFilterActiveChange
}) => {

  const [categories, setCategories] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  // Fetch Categories
  useEffect(() => {

    fetch('https://dummyjson.com/products/categories')

      .then((res) => res.json())

      .then((data) => {

        setCategories(data);

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);

  // Fetch Filter Products
  useEffect(() => {

    // If no category selected
    if (selectedCategories.length === 0) {

      setSidebarProducts([]);

      onFilterActiveChange(false);

      return;

    }

    onFilterActiveChange(true);

    const fetchProducts = selectedCategories.map((category) =>

      fetch(`https://dummyjson.com/products/category/${category.slug}`)

        .then((res) => res.json())

        .then((data) => data.products)

    );

    Promise.all(fetchProducts)

      .then((allProducts) => {

        const combinedProducts = allProducts.flat();

        setSidebarProducts(combinedProducts);

      })

      .catch((err) => {

        console.log(err);

      });

  }, [
    selectedCategories,
    setSidebarProducts,
    onFilterActiveChange
  ]);

  // Checkbox Handle
  const handleCategoryChange = (category) => {

    setSelectedCategories((prevSelected) => {

      const alreadySelected = prevSelected.find(
        (item) => item.slug === category.slug
      );

      if (alreadySelected) {

        return prevSelected.filter(
          (item) => item.slug !== category.slug
        );

      } else {

        return [...prevSelected, category];

      }

    });

  };

  return (

    <div className='sidebar-container'>

      <div className='sidebar'>

        <h4 className='sidebar-title'>
          Sidebar Filter
        </h4>

        {

          categories.length > 0 ? (

            categories.map((category) => (

              <div
                key={category.slug}
                className='category-item'
              >

                <input
                  type='checkbox'
                  id={category.slug}
                  checked={selectedCategories.some(
                    (item) => item.slug === category.slug
                  )}
                  onChange={() =>
                    handleCategoryChange(category)
                  }
                />

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

  );
};

export default SidebarFilter;