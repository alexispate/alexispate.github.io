import React from 'react'
import './Nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {BsTools} from 'react-icons/bs'
import {ImBriefcase} from 'react-icons/im'
import {GiSecretBook} from 'react-icons/gi'
import {SiMinutemailer} from 'react-icons/si'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#header' onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><FaHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserGraduate/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BsTools/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBriefcase/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiSecretBook/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiMinutemailer/></a>
    </nav>
  )
}

export default Nav