import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";

import Logo_Img from "../../assets/Images/Header/Logo.jpg";

import { setSearchTerm } from "../../redux/searchSlice";

import { CiUser, CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cartHome.cartItems
  );

  const [showProfile, setShowProfile] = useState(false);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="header">
      <div className="header_container">

        {/* Logo */}
        <div className="logo_section">
          <Link to="/">
            <img src={Logo_Img} alt="Logo" className="appLogo" />
          </Link>
        </div>


        {/* Search */}
        <div className="search_section">
          <input type="text" className="search_input"
            placeholder="Search products..."
            onChange={handleSearch} />
        </div>

        {/* Right Section */}
        <div className="action_section">

          {/* Profile */}
          <div className="profile_container">
            <button className="profile_btn"
              onClick={() => setShowProfile(!showProfile)}>
              <CiUser className="profile_icon" />
              <span>Profile</span>
            </button>

            {showProfile && (
              <div className="profile_dropdown">
                <Link to="/">My Profile</Link>
                {/* <Link to="/register"> Register </Link> */}
                <Link to="/"> Login </Link>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link
            to="/cartPage"
            className="cart_btn"
          >
            <div className="cart_wrapper">
              <CiShoppingCart className="cart_icon" />

              {cartItems.length > 0 && (
                <span className="cart_badge">
                  {cartItems.length}
                </span>
              )}
            </div>

            <span>Cart</span>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;