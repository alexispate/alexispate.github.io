import React from 'react'
import './About.css'
import {FaBuilding} from 'react-icons/fa'
import {GiFullFolder} from 'react-icons/gi'
import Headshot from '../../assests/IMG_0673.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>All About Me</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Headshot} alt="Professional" ></img>
          </div>
        </div>
        <div className='about__content'>
            <div className='about__cards'>

              <article className='about__card'>
                <FaBuilding className='about__icon'/>
                <h5>Working Experience</h5>
                <small>1 Year Working in Industry</small>
              </article>

              <article className='about__card'>
                <GiFullFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>3 Completed Projects</small>
              </article>

            </div>
            <p>
              I consider myself to be a highly motivated individual with a strong commitment to continuous learning, both personally and professionally. 
              Throughout my career, I've actively sought out challenges and opportunities for growth. I approach every project with a high level of dedication and strive for excellence in everything I do. 
              My professional journey has been diverse, covering various domains including advertising, social media, email marketing, and more. In each role, I've dedicated myself to delivering results and ensuring the success of every project I undertake.
              I have a deep passion for learning from others and believe in the power of collaboration to achieve the best outcomes.
              In terms of my educational background, I pursued a major in Strategic Communications with minors in Sociology and Human Development & Family Studies, 
              which has provided me with a solid foundation in Marketing, communications, leadership, content creation, and more.
            </p>
            <a href='#contact' className='btn btn-primary'>Get in Contact With Me</a>
          </div>
      </div>
    </section>
  )
}

export default About