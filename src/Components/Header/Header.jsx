import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import Logo_Img from '../../assets/Images/Header/Logo.jpg';

const Header = ({ setSearch }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 ps-5">
          <Link to="/">
            <img src={Logo_Img} alt="E Comm Logo" className="appLogo" />
          </Link>
        </div>

        <div className="col-sm-1"> </div>

        <div className="col-sm-5 mt-3">          
          <input type="text" className="form-control search" placeholder="Search Products"
            onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className="col-sm-1"> </div>

        <div className="col-sm-1 ps-3 mt-3">
          <Link className="profile_style"
            onClick={() => setVisible(!visible)}> Profile </Link>
        </div>

        <div className="col-sm-1 ps-5 mt-3">
          <Link className="cart_style"> Cart </Link>
        </div>

      </div>

      {visible && (
        <div className="profile_dropdown">
          <Link> User Name </Link> <hr />
          <Link> User Order </Link> <hr />
          <Link> Delete Account </Link> <hr />
          <Link> Logout </Link>
        </div>
      )}     
    </div>
  );
};

export default Header;