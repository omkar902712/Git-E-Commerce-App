import React from 'react'
import Footer from './Components/Footer/Footer'

import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import CategoriesNavbar from './Components/CategoriesNavbar/CategoriesNavbar';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

const App = () => {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/product/:id" element={<ProductDetails /> } />
      </Routes>      
    </>
  )
}

export default App