import React from "react";
import './About.css'; // ✅ Global CSS import
import abtimg from '../../assets/about-img-.jpg';
import abtimg2 from '../../assets/about-img-1.jpg';
import about_card_img1 from '../../assets/about-card01.png';
import about_card_img2 from '../../assets/about-card02.png';

function About() {
    return (
        <div className="About_wrapper section" id="about">
            <div className="counters">
                <p>7.5M+ <span>Charging Station Initiated</span></p>
                <p>12k+ <span>Charging Station In Network</span></p>
                <p>80%+ <span>Eco Friendly Charging Stations</span></p>
                <p>123+ <span>Charging Stations In This Region</span></p>
            </div>

            <div className="about">
                <div className="about_img">
                    <img src={abtimg} alt="abt-img" />
                    <img src={abtimg2} alt="abt-img" />
                </div>
                <div className="about_content">
                    <small className="section_title">(About Us)</small>
                    <h2>Solutions of All EC <br /> <span>Charging Solutions </span></h2>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, beatae Lorem ipsum dolor sit amet.</p>
                    <div className="about_cardarea">
                        <div className="card">
                            <img src={about_card_img1} alt="about card-li" />
                            <h3>Warranty Extensions</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
                        </div>
                        <div className="card">
                            <img src={about_card_img2} alt="about card-li" />
                            <h3>Spare Parts Management</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
