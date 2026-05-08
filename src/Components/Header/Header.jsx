import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

  const appLogo = {
    title: "App Logo Meesho",
    thumnail: "https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className="container-fluid">

      <div className="row">

        <div className="col-sm-2 ps-5">
          <Link to="/">
            <img src={appLogo.thumnail} alt={appLogo.title} className="appLogo" />
          </Link>
        </div>

        <div className="col-sm-1"> </div>

        <div className="col-sm-5 mt-3">
          <input id="msg" type="text" className="form-control" name="msg" placeholder="Search Products" />
        </div>

        <div className="col-sm-1"> </div>

        <div className="col-sm-1 ps-3 mt-3">
          <Link className="profile_style"
            onClick={()=>setVisible(!visible)}> Profile </Link>
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