import React from 'react'
import '../Contact/contact.css' 
import { MdMailOutline } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvepz7t', 'template_oydejzj', form.current,'HrKo-a0w7kbyGZP5q')
      e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
                <MdMailOutline className='contact_option-icon'/>
                <h4>Email</h4>
                <h5>satyadinesh5510@gmial.com</h5>
                <a href="mailto:satyadinesh5510@gmial.com" target='_blank'>Send A Message</a>
            </article>

            <article className='contact__option'>
                <FiInstagram className='contact_option-icon'/>
                <h4>INSTAGRAM</h4>
                <h5>_satya_dinesh_</h5>
                <a href="https://www.instagram.com/satya_dinesh" target='_blank'>Send A Message</a>
            </article>

            <article className='contact__option'>
                <BsWhatsapp className='contact_option-icon'/>
                <h4>WHATSAPP</h4>
                <h5>+91 9959345646</h5>
                <a href="https://api.whatsapp.com/send?phone=+919347852797" target='_blank'>Send A Message</a>
            </article>
          </div>

          {/* end of contact options */}

          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button className='btn btn-primary' type='submit'>Send Message</button>
          </form>
      </div>

    </section>
  )
}

export default Contact