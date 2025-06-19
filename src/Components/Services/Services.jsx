import React from 'react'
import servicesCss from './Services.css'
import service_card_img1 from '../../assets/service_card_img_1.png'
import service_card_img2 from '../../assets/service_card_img_2.png'
import service_card_img3 from '../../assets/service_card_img_3.png'
import service_card_img4 from '../../assets/service_card_img_4.png'


import Img_service from '../../assets/service_img.png'
import service_element from '../../assets/service_element.png'




const Services = () => {
  return (
    <div className={`${servicesCss.Service_wrapper} section`} id='services'>
        <small className='section_title'>(Our Services)</small>
        <h2>Excellent & Best Services</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eum praesentium eligendi, fugiat quo debitis.</p>

        <div className={servicesCss.service_container}>
            <div className={servicesCss.service_cards}>

                <div className={servicesCss.service_card}>
                    <img src={service_card_img1} alt="image- service" />
                    <h3>Building Services</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, hic?</p>
                </div>
                <div className={servicesCss.service_card}>
                    <img src={service_card_img2} alt="image- service" />
                    <h3>Home Charging</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, hic?</p>
                </div>
            </div>

            <img src={Img_service} alt="service-image" id={servicesCss.serviceImg}/>

            <div className={servicesCss.service_cards}>

                <div className={servicesCss.service_card}>
                    <img src={service_card_img3} alt="image- service" />
                    <h3>AC Charging</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, hic?</p>
                </div>
                <div className={servicesCss.service_card}>
                    <img src={service_card_img4} alt="image- service" />
                    <h3>DC Charging</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, hic?</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services;