import React from "react";
import "./navBar.css";
import {
  Home,
  WorkOutline,
  ContactMail,
  Instagram,
  Facebook,
} from "@material-ui/icons";
import logo from "../../img/logo.jpeg";
function NavBar() {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="home">
          <img src={logo} className="logo-img" />
          <a href="#home" className="logo">
            Multilingual Services
          </a>
        </div>
        <div className="wrapper-menu">
          <div className="center">
            <div className="item-container">
              <Home className="icon" />
              <a href="#home">Home</a>
            </div>
            <div className="item-container">
              <WorkOutline className="icon" />
              <a href="#about">work</a>
            </div>
            <div className="item-container">
              <ContactMail className="icon" />
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="social">
          <a href="">
            <Facebook className="social-icon" />
          </a>
          <a href="https://instagram.com/multilingual.service?utm_medium=copy_link">
            <Instagram className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
