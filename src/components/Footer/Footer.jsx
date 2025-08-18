import React from 'react'
import './footer.css'
import insta from '../../assets/Images/instagram_icon.png'
import fb from '../../assets/Images/facebook_icon.png'
import yt from '../../assets/Images/youtube_icon.png'
import twitter from '../../assets/Images/twitter_icon.png'


const Footer = () => {
  return (
    <div className='Footer'>
      <div className="social">
        <img src={insta} alt="" />
        <img src={fb} alt="" />
        <img src={yt} alt="" />
        <img src={twitter} alt="" />
      </div>
      <ul>
        <li>Audio Description </li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor Realtions</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us </li>
     </ul>
     <p className='copyright-text'>2002-2025 Notflix, Inc.</p>
    </div>
  )
}

export default Footer