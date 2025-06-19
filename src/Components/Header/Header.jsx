import React, { useRef } from "react";
import './Header.css'; // ✅ Correct import

function Header() {
  const menu = useRef();

  const MenuHandler = () => {
    menu.current.classList.toggle("showMenu"); // ✅ string class name
  };

  return (
    <div className="nav_wrapper">
      <div className="logo">
        <a href="#"><span>Ev</span>Hub</a>
      </div>
      <ul ref={menu}>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#features">features</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="Nav_btns">
        <button>Get Started <i className="ri-instance-line"></i></button>
        <i className="ri-menu-4-line" id="bars" onClick={MenuHandler}></i>
      </div>
    </div>
  );
}

export default Header;
