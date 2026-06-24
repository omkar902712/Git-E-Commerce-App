import React from 'react'
import Footer from './Components/Footer/Footer'

import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
// import Header from './Components/Header/Header';
// import CategoriesNavbar from './Components/CategoriesNavbar/CategoriesNavbar';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import CartPage from './Pages/Cart/CartPage';
import CartIsZero from './Pages/Cart/CartIsZero';
import BuyNow from './Pages/BuyNow/BuyNow';
import Register from './Pages/Register/Register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />

        <Route path="/register" element={<Register/>} />
        
        <Route path="/" element={<Home />} />        
        
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/buynow/:id" element={<BuyNow />} />

        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/cartIsZero" element={<CartIsZero />} />
      </Routes>
    </>
  )
}

export default App