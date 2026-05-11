import React, { useState } from 'react'

import Header from '../../Components/Header/Header';
import CategoriesNavbar from '../../Components/CategoriesNavbar/CategoriesNavbar';
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import AllProducts from '../AllProducts/AllProducts'
import Footer from '../../Components/Footer/Footer';
import SearchProducts from '../SearchProducts/SearchProducts';

const Home = () => {

  const [search, setSearch] = useState('');

  return (
    <div>      
      <Header setSearch={setSearch} />  

      <CategoriesNavbar />      

      <HomeCarousel/>      

      <hr/>     
      
      {search.length === 0 ? 
        <AllProducts /> : <SearchProducts search={search}/> }

      <Footer />
    </div>
  )
}

export default Home