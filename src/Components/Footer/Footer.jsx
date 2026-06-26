import React from 'react';
import './Footer.css';

import Logo_Img from "../../assets/Images/Header/Logo.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="amazon-footer">
      {/* Back to Top */}
      <div className="back-to-top" onClick={scrollToTop}>
        Back to top
      </div>

      {/* Main Footer Links */}
      <div className="footer-links-container">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li> Careers </li>
            <li> Blog </li>
            <li> About ShopVibe </li>
            <li> Investor Relations </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on ShopVibe </li>
            <li>Sell on ShopVibe Business</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>ShopVibe Payment Products</h3>
          <ul>
            <li>ShopVibe Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>ShopVibe Currency Converter</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Logo and Language Section */}
      <div className="footer-logo-section">

        {/* <img 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon Logo" 
          className="footer-logo" 
        /> */}

        <div>
          <Link to="/">
            <img src={Logo_Img} alt="Logo" className="footer-logo" />
          </Link>
        </div>

        <div className="footer-settings">
          <span className="setting-box">English</span>
          <span className="setting-box">$ USD - U.S. Dollar</span>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="footer-bottom">
        <div className="bottom-links">
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Your Ads Privacy Choices</span>
        </div>
        <p className="copyright">
          &copy; 1996-2027s, ShopVibe.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;