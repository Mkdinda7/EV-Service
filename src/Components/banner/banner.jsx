import React from "react";
import bannerCss from './../banner/banner.css';
import client1 from './../../assets/user-01.jpg'
import client2 from './../../assets/user-02.jpg'
import client3 from './../../assets/user-03.jpg'

function Banner() {
    return(
        <div className={`${bannerCss.Header_Wrapper} section`} id="home">
            <div className={bannerCss.content}>
                <small>for Everyone , every Business, Every Vechicle</small>
                <h1>Unique Solutions for <span>Charging Stations</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum porro nostrum facilis eius laboriosam vero non ipsa dolorum inventore dolore, alias ex aspernatur accusantium maxime.</p>
                <div className={bannerCss.banner_btns}>
                    <button className="btn">Test Drive <i className="ri-roadster-line"></i></button>
                    <div className={bannerCss.clients_wrapper}>
                        <img src={client1} alt="client-images" />
                        <img src={client2} alt="client-images" />
                        <img src={client3} alt="client-images" />

                        <span>Let's Join Us.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;