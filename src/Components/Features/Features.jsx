import React from 'react';
import './Features.css'; // ✅ Fixed CSS import
import img1 from './../../assets/features.jpg';

const Features = () => {
  return (
    <div className="Features_wrapper section" id="features">
      <small className="section_title">(Main Features)</small>
      <h2>Elevate Your <span>ECO - Journey</span></h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic iusto tenetur atque excepturi exercitationem quas.</p>

      <div className="features_cards">
        <div className="featiresCard">
          <img src={img1} alt="featurescard -img" />
          <i className="ri-play-line"></i>
        </div>
        <div className="featiresCard">
          <div className="cardContainer">
            <small>Connectivity</small>
            <h3>Smart Connectivity</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste, non tempora atque consectetur minus.</p>
          </div>
          <div className="cardContainer">
            <small>Technology</small>
            <h3>Smart Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste, non tempora atque consectetur minus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
