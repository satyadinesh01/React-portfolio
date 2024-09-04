import React, { useState } from 'react'
import './nav.css'
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";



const Nav = () => {
  const [activeNav , setActiveNav] = useState('#')
  return (
      <nav>
        <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser/></a>
        <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LuBookMarked /></a>
        <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
      </nav>
    )
}

export default Nav