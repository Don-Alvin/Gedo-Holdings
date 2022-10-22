import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='home' id='home'>
      <div className='home__container container'>
        <div className='home__data'>
          <h1 className='home__title'>Building Relationships</h1>
          <p className='home__description'>
            Putting relationships first with intergrity passion and commitment<br></br>
            <span className='home__description-span'>Creating lifetime memories by rethinking construction</span>
          </p>
          <div className='projects-services__home-link'>
            <a href='#works' className='works'>
              <h3>Works</h3>
            </a>
            <a href='#services' className='services'>
              <h3>Services</h3>
            </a>
          </div>
          <a href='#' className='button home__button'>Subscribe</a>
          <p className='subscribe__description'>Get the latest construction news and trends in the market</p>
        </div>
      </div>
    </div>
  )
}

export default Hero