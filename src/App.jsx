import React from 'react'
import Footer from './Components/Footer/Footer'

import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element = {<Category/> } />
      </Routes>

      <Footer />
    </>
  )
}

export default App