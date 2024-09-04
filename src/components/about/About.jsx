import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { VscFileSubmodule } from "react-icons/vsc";




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'>
              <div className='about__me-image'>
                  <img src={ME} alt="About Image" />
              </div>
          </div>
          <div className='about__content'>
             <div className='about__cards'>
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experiences</h5>
                    <small>2+ Years Working</small>
                </article>

                <article className='about__card'>
                    <FaUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>100+</small>
                </article>

                <article className='about__card'>
                    <VscFileSubmodule className='about__icon'/>
                    <h5>Projects</h5>
                    <small>30+ Completed</small>
                </article>
             </div>

             <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, adipisci. Quo autem voluptatibus itaque libero eaque necessitatibus quia, sequi voluptate, sint eos accusantium, quam debitis provident praesentium fugit quae enim?
             </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About