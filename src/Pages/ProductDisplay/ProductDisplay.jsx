import React from 'react';

import { Link } from 'react-router-dom';

import './ProductDisplay.css';

const ProductsDisplay = ({ products = [] }) => {

  return (

    <div className='products-display'>

      {
        products.length === 0 ? (

          <div className='text-center mt-5'>

            <h4>No Products Found</h4>

          </div>

        ) : (

          <div className='row'>

            {

              products.map((product) => (

                <div
                  key={product.id}
                  className='col-lg-3 col-md-4 col-sm-6 mb-4'
                >

                  <div className='product-card'>

                    <Link
                      to={`/product/${product.id}`}
                      className='text-decoration-none text-dark'
                    >

                      {/* Product Image */}
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className='product-image'
                      />

                      {/* Product Title */}
                      <h5 className='product-title'>

                        {product.title}

                      </h5>

                      {/* Product Price */}
                      <p className='product-price'>

                        ${product.price}

                      </p>

                    </Link>

                  </div>

                </div>

              ))

            }

          </div>

        )
      }

    </div>

  );

};

export default ProductsDisplay;