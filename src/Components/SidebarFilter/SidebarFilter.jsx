import React, { useEffect, useState } from 'react';

const SidebarFilter = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch Categories on mount
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => {
        // DummyJSON returns an array of category objects directly
        setCategories(data);
      });
  }, []);

  // Fetch Products when selectedCategory changes
  useEffect(() => {
    if (selectedCategory !== '') {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then(res => res.json())
        .then((data) => {
          // Update products state, NOT categories
          setProducts(data.products);
        });
    }
  }, [selectedCategory]);

  const handleCategoryChange = (slug) => {
    // If clicking the same category, deselect it; otherwise, select new
    setSelectedCategory(prev => prev === slug ? '' : slug);
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Sidebar Section */}
      <div style={{ minWidth: '200px' }}>
        <h5>Sidebar Filter</h5>
        {categories && categories.length > 0 ? (
          categories.map((item) => (
            <div key={item.slug}>
              <input
                type="checkbox"
                id={item.slug}
                checked={selectedCategory === item.slug}
                onChange={() => handleCategoryChange(item.slug)}
              />
              <label htmlFor={item.slug}> {item.name} </label>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>

      {/* Products Section */}
      <div>
        <h2>Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
                <h3>{product.title}</h3>
                <img src={product.thumbnail} alt={product.title} width="150" />
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>Select a category to see products.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;