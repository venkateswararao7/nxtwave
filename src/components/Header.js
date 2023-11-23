import React from "react";
import logo from "./images/logo.png";
import avatar from "./images/avatar.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
      </div>
      <div className="header__right">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Header;
