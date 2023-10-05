import React from 'react'
import './Contact.css'
import {MdMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import Dogs from '../../assests/Dogs.jpg'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='contact__container'>
        <div className='contact__me'>
          <img className= 'contact__me-image' src={Dogs}/>
        </div>

        <div className="contact__options">
          <article className='contact__option'>
            <MdMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>alexisnpate@gmail.com</h5>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>alexispate</h5>
            <a href='https://www.linkedin.com/in/alexispate' target='_blank'>View my LinkedIn</a>
          </article>

          <article className='contact__option'>
            <AiFillPhone className='contact__option-icon'/>
            <h4>Phone Number</h4>
            <h5>801-884-3335</h5>
          </article>
          
        </div>
      </div>
    </section>
  )
}

export default Contact