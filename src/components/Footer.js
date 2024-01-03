import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <p>Terms & Conditions</p>
            <p>Privacy</p>
            <p>Accessibility</p>
            <p>Returns & Refunds</p>
            <p>FAQs</p>
            <p>Delivery Information</p>
            <p>Exchange Policies</p>
            <p>Our Newsletter</p>

          <div className='social'>
            <p id='contact-us'>Contact Us:</p>
              <FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> 
              <FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>
              <FaFacebook size={20} style={{color: '#ffffff', marginRight: '1rem'}}/>
              <FaTwitter size={20} style={{color: '#ffffff', marginRight: '1rem'}}/>
          </div>
        </div>
    </div>
  )
}

export default Footer