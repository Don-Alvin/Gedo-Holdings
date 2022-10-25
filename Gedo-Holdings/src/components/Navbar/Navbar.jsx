import React from 'react'
import { BiBuildingHouse } from 'react-icons/bi'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaStream } from 'react-icons/fa'

import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    }else setNavbar(false)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={navbar ? 'navbar navbar-active' : 'navbar'}>
        <nav className='container nav'>
          <a href="home" className='nav__logo'>
              <span className="logo">
                <BiBuildingHouse /> 
              </span>
              <span className='logo__title'>Gedo Holdings</span>
          </a>

          {/* Nav Links */}
          <div className='nav__menu'>
            <ul className='nav__list'>
              {['home', 'about', 'work', 'testimonials', 'blog', 'contact'].map((item) => (
                <li className='nav__item' key={`link-${item}`}>
                  <a href={`#${item}`}>
                    {item}
                  </a>
                  <div></div>
                </li>
              ))}
            </ul>
            <div className='navToggle'>
                <a href='#'>
                  <FaStream />
                </a>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar