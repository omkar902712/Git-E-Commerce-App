import React, { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import SearchProducts from "../SearchProducts/SearchProducts";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";
import AllProducts from "../AllProducts/AllProducts";

import CategoriesNavbar from "../../Components/CategoriesNavbar/CategoriesNavbar";

import SidebarFilter from "../../Components/SidebarFilter/SidebarFilter";
import ProductsDisplay from "../ProductDisplay/ProductDisplay";

const Home = () => {

  const searchTerm = useSelector(
    (state) => state.searchHome.searchTerm
  );

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [sidebarProducts, setSidebarProducts] =
    useState([]);

  const [sidebarFilterActive, setSidebarFilterActive] =
    useState(false);

  return (
    <div className="container-fluid">

      {/* Header */}
      <div className="row">

        <Header />

        <CategoriesNavbar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <HomeCarousel />

      </div>

      <br />
      <br />

      {/* Main Section */}
      <div className="row">

        {/* Sidebar */}
        <div className="col-sm-2">

          <SidebarFilter
            setSidebarProducts={setSidebarProducts}
            onFilterActiveChange={setSidebarFilterActive}
          />

        </div>

        {/* Products */}
        <div className="col-sm-10 mt-4">

          {sidebarFilterActive ? (

            <ProductsDisplay products={sidebarProducts} />

          ) : searchTerm.trim() ? (

            <SearchProducts />

          ) : selectedCategory ? (

            <ProductsDisplay
              selectedCategory={selectedCategory}
            />

          ) : (
            <AllProducts />
          )}
        </div>
      </div>

      <hr />

      <Footer />

    </div>
  );
};

export default Home;