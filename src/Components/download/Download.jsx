import React from 'react';
import './Download.css'; // ✅ Fixed import
import ctaImg from './../../assets/cta_image.png';

const CTA = () => {
  return (
    <div className="Calltoaction_wrapper section">
        <div className="content">
            <small className='section_title'>(Download Our App)</small>
            <h2>Find <span>Charging Stations</span> <br /> Near You with <span>Our App</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, provident!</p>
        </div>
        <div className="image">
            <img src={ctaImg}  alt="cta-img" />
        </div>
    </div>
  );
};

export default CTA;
