import React, { useRef } from "react";
import navCss from './../nav/Nav.css' ;

function Nav() {

    const menu = useRef();

    const MenuHandler = () =>{
        menu.current.classList.toggle(navCss.showMenu);
    }

    return(
        <div className={navCss.nav_wrapper}>
            <div className={navCss.logo}>
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

           <div className={navCss.Nav_btns}>
            <button>Get Started <i className="ri-instance-line"></i></button>
            <i className="ri-menu-4-line" id={navCss.bars} onClick={MenuHandler} ></i>
           </div>
        </div>
    )
}

export default Nav ;