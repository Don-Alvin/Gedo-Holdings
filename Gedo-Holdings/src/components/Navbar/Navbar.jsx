import React from 'react'
import { BiBuildingHouse } from 'react-icons/bi'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaStream } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <header className='header' id='header'>
        <nav className='container nav'>
          <a href="home" className='nav__logo'>
              <BiBuildingHouse /> <span>Gedo Holdings</span>
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
      </header>
    </div>
  )
}

export default Navbar