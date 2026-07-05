import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Auth
import ProtectedRoutes from "./auth/ProtectedRoutes";

// ===============================
// Lazy Loading
// ===============================

// Testing Purpose Only (Remove later)
const Home = lazy(() =>
  new Promise((resolve) => {
    console.log("⏳ Waiting 5 seconds before loading Home...");

    setTimeout(() => {
      console.log("✅ Home Loaded");
      resolve(import("./Pages/Home/Home"));
    }, 5000);
  })
);

// Normal Lazy Loading
const ProductDetails = lazy(() =>
  import("./Pages/ProductDetails/ProductDetails")
);

const CartPage = lazy(() =>
  import("./Pages/Cart/CartPage")
);

const CartIsZero = lazy(() =>
  import("./Pages/Cart/CartIsZero")
);

const BuyNow = lazy(() =>
  import("./Pages/BuyNow/BuyNow")
);

const Register = lazy(() =>
  import("./Pages/Register/Register")
);

const Login = lazy(() =>
  import("./Pages/Login/Login")
);

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>

        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
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

        <Route
          path="/cartIsZero"
          element={
            <ProtectedRoutes>
              <CartIsZero />
            </ProtectedRoutes>
          }
        />

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </Suspense>
  );
};

export default App;