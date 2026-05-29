import React, { useEffect, useState } from "react";
import './AllProducts.css';
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        {products.map((item, index) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4 d-flex">
            {/* Added d-flex flex-column to make sure internal elements stretch properly */}
            <div className="product-card w-100 d-flex flex-column p-3 border rounded shadow-sm">

              {/* Link only wraps the clickable content area */}
              <Link to={`/product/${item.id}`} className="product-link text-decoration-none text-dark d-flex flex-column grow">

                <span className="badge bg-secondary align-self-start">
                  Item #{index + 1}
                </span>

                <div className="img-container text-center">
                  <img src={item.thumbnail} alt={item.title}
                    className="img-fluid products-img" />
                </div>

                <div className="product-info">
                  <h5 className="product-title">{item.title}</h5>
                  <h3 className="product-price text-primary">
                    ${item.price}
                  </h3>
                </div>

                <div className="rating-box d-flex align-items-center">
                  <h3 className="alert alert-info">
                    Rating : {item.rating} / 5
                  </h3>
                </div>

                {/* <div className="viewDetails">
                  <button className="btn btn-primary btn-sm w-100">
                    View Details
                  </button>
                </div> */}
              </Link>

              {/* Button sits safely outside the Link but inside the Flex card */}


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;