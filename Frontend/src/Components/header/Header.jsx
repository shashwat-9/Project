import React from "react";
import "./Header.css";
import profileImg from "../../images/profile_img.png";
const Header = () => {
  return (
    <div>
      <div className="main-header">
        <div className="header-main-left">
          <div className="header-logo-1">N</div>
          <div className="header-logo-2">2</div>
          <div className="header-logo-1">T</div>
        </div>
        <div className="header-main-middle">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sign Up</li>
          <li>Login</li>
        </div>
        <div className="header-main-right">
          <img src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
