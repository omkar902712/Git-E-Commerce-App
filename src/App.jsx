import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CartPage from "./Pages/Cart/CartPage";
import CartIsZero from "./Pages/Cart/CartIsZero";
import BuyNow from "./Pages/BuyNow/BuyNow";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

// Auth
import ProtectedRoutes from "./auth/ProtectedRoutes";


const App = () => {
  return (
    <Routes>

      {/* Public Routes - No login required */}
      <Route 
        path="/register" 
        element={<Register />} 
      />

      <Route 
        path="/login" 
        element={<Login />} 
      />


      {/* Private Routes - Login required */}
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />


      <Route
        path="/product/:id"
        element={
          <ProtectedRoutes>
            <ProductDetails />
          </ProtectedRoutes>
        }
      />


      <Route
        path="/buynow/:id"
        element={
          <ProtectedRoutes>
            <BuyNow />
          </ProtectedRoutes>
        }
      />


      <Route
        path="/cartPage"
        element={
          <ProtectedRoutes>
            <CartPage />
          </ProtectedRoutes>
        }
      />


      <Route path="/cartIsZero"
        element={
          <ProtectedRoutes>
            <CartIsZero />
          </ProtectedRoutes>
        }
      />


      {/* 404 Page */}
      <Route
        path="*"
        element={<h1>404 Not Found</h1>}
      />

    </Routes>
  );
};


export default App;