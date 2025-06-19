import React from 'react'
import FeaturesCss from '../Features/Features.module.css'


import img1 from './../../assets/features.jpg'

const Features = () => {
  return (
    <div className={`${FeaturesCss.Features_wrapper} section`} id='features'>
        <small className='section_title'>(Main Features)</small>
        <h2>Elevate Your <span>ECO - Journey</span></h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic iusto tenetur atque excepturi exercitationem quas.</p>

        <div className={FeaturesCss.features_cards}>
          <div className={FeaturesCss.featiresCard}>
            <img src={img1} alt="featurescard -img" />
            <i className="ri-play-line"></i>
          </div>
          <div className={FeaturesCss.featiresCard}>
            <div className={FeaturesCss.cardContainer}>
              <small>Connectivity</small>
              <h3>Smart Connectivity</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste, non tempora atque consectetur minus.</p>
            </div>
            <div className={FeaturesCss.cardContainer}>
              <small>Technology</small>
              <h3>Smart Technology</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste, non tempora atque consectetur minus.</p>
            </div>
            
          </div>
          
        </div>
    </div>
  )
}

export default Features;