import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaLink } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icons'>
        <IconContext.Provider value={{ color: "black", size:'1.5rem', className: "global-class-name" }}>
            <a href='https://www.facebook.com/ToritsemugboneA/' target='blank'><FaFacebook /></a>
            <a href='https://www.instagram.com/pricelesstori/' target='blank'><FaInstagram /></a>
            <a href='https://www.twitter.com/ToritsemugboneA/' target='blank'><FaTwitter /></a>
            <a href='https://www.linkedin.com/in/torrie01/' target='blank'><FaLinkedin /></a>
            <a href='https://www.youtube.com/torrie/' target='blank'><FaYoutube /></a>
            <a href='https://portfolio-1-m4oojzuki-gbonetoritse-gmailcom.vercel.app/' target='blank'><FaLink /></a>
        </IconContext.Provider>
        </div>
        <div className='terms'>
            <a href='#123'>Conditions of use</a>
            <a href='#123'>Privacy and Policy</a>
            <a href='#123'>Press Room</a>
        </div>
        <div><p>2023 MovieBox by Asifor Toritsemugbone</p></div>
    </div>
  )
}

export default Footer;