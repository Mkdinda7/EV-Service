import React from 'react'
import footerCss from './Footer.css'

const Footer = () => {
  return (
    <div className={`${footerCss.footer_wrapper} section`} id='contact'>
        <div className={footerCss.footerLinks}>
            <h2><span>EV.</span>HUB</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptates.</p>
        </div>
        <div className={footerCss.footerLinks}>
            <h3>Useful  Links</h3>
            <p><a href="#">Services</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Pricing</a></p>
        </div>
        <div className={footerCss.footerLinks}>
            <h3>Services</h3>
            <p><a href="#">Charging Stations</a></p>
            <p><a href="#">Charging Points</a></p>
            <p><a href="#">AC Charging Stations</a></p>
            <p><a href="#">DC Charging Stations</a></p>
        </div>
        <div className={footerCss.footerLinks}>
            <h3>Direct Links</h3>
            <p><a href="#">Contact Us</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms and Conditions</a></p>
            <p><a href="#">Support Us</a></p>

        </div>
    </div>
  )
}

export default Footer;
