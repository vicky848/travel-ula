import React from 'react'
import { FaFacebook,  FaTwitter , FaSquareInstagram } from "react-icons/fa6";

import './index.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <p>�� 2022 My Website. All rights reserved.</p>
        <p>Contact: 123-456-7890</p>

        {/* Add your social media icons here */}
        <ul className='footer-list'>
            <li><FaFacebook className='icon facebook' /></li>
            <li><FaTwitter className='icon twitter' /></li>
            <li><FaSquareInstagram className='icon instagram' /></li>
        </ul>
      
    </div>
  )
}

export default Footer