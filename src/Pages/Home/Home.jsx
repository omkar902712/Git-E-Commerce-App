import React, { useState } from 'react'

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import SearchProducts from '../SearchProducts/SearchProducts';

import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import AllProducts from '../AllProducts/AllProducts'

import CategoriesNavbar from '../../Components/CategoriesNavbar/CategoriesNavbar';

import SidebarFilter from '../../Components/SidebarFilter/SidebarFilter';

const Home = () => {

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState('');

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header setSearch={setSearch} />

        <CategoriesNavbar />

        <HomeCarousel />
      </div>           

      <div className='row'>
        <div className='col-sm-2 mt-5'>
          
          <SidebarFilter />
        </div>

        <div className='col-sm-10'>
          {search.length === 0 ?
        <AllProducts /> : <SearchProducts search={search} />}
        </div>

      </div>

      

      <hr />

      

      <Footer />
    </div>
  )
}

export default Home