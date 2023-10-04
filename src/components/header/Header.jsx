import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Headshot from '../../assests/IMG_0670.jpg'


const Header = () => {
  return (
    <section id='header'>
      <header>
        <div className="header__contianer">
          <h5>Hello there, I'm</h5>
          <h1> Alexis Pate</h1>
          <h5 className="text-light"> Marketing and Communications Professional </h5>
          {/* CTA is the class that holds the download resume and contact buttons*/}
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={Headshot} alt="Professional" ></img>
          </div>

          <a href='#contact' className='scroll__down'>Go To Bottom</a>
        </div>
      </header>
    </section>
    
  )
}

export default Header