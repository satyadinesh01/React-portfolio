import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
       <a href="#" className='footer__logo'>Satya</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experiences">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF /></a>
      <a href="https://instagram.com"><FaInstagram /></a>
      <a href="https://twitter.com"><FaXTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SatyaDinesh. All rights recived</small>
      </div>
    </footer>
  )
}

export default Footer