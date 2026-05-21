import React, { useState } from 'react'

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import SearchProducts from '../SearchProducts/SearchProducts';

import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import AllProducts from '../AllProducts/AllProducts'

import CategoriesNavbar from '../../Components/CategoriesNavbar/CategoriesNavbar';

import SidebarFilter from '../../Components/SidebarFilter/SidebarFilter';
import ProductsDisplay from '../ProductDisplay/ProductDisplay';

const Home = () => {

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sidebarFilterActive, setSidebarFilterActive] = useState(false);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header setSearch={setSearch} />

        <CategoriesNavbar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <HomeCarousel />
      </div>

      <br /> <br />

      <div className='row'>
        <div className='col-sm-2'>
          <SidebarFilter onFilterActiveChange={setSidebarFilterActive} />
        </div>

        <div className='col-sm-10 mt-5'>
          {!sidebarFilterActive && (
            selectedCategory ? (
              <ProductsDisplay selectedCategory={selectedCategory} />
            ) : search.length > 0 ? (
              <SearchProducts search={search} />
            ) : (
              <AllProducts />
            )
          )}
        </div>
      </div>

      <hr />

      <Footer />
    </div>
  )
}

export default Home