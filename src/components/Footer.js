import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <h4>Terms & Conditions </h4>
            <h4> Privacy </h4>
            <h4> Accessibility </h4>
            <div className='social'>
              <h4>Contact Us:</h4>
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