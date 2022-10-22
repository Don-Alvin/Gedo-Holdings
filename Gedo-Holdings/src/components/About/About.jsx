import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about__container container'>
        <h1 className='about__title'>About Us</h1>
        <div className="about__description">
          <p className='about__description-intro'>
            Gedo Holdings is a Construction and Property Management company headquartered in Nairobi. Gedo Holdings
            is proud to have gained reputation in the industry for delivering uniquely designed homes that are centered
            at the needs of the client. Our company has served clients from across the country with ongoing and finished
            projects in all corners of the country.
          </p>
          <div className="about__description-services" id="services">
            <h2 className="about__description-services-title">Our Services</h2>
            <p className="about__description-services-description">
              At Gedo Holdings we offer a wide range of Services
            </p>
            <div className="about__descrition-services-main">
              <div className="site-approvals">
                <h3 className="site-approvals-title">Site Approvals</h3>
                <img src="../../assets/Siteapprovals.png" alt="site-approvals" />
              </div>
              <div className="renovation">
                <h3 className="renovation">Renovation</h3>
                <img src="../../assets/Renovations.png" alt="renovation" />
              </div>
              <div className="construction">
                <h3 className="construction-title">Construction</h3>
                <img src="../../assets/Construction.png" alt="construction" />
              </div>
              <div className="architecture">
                <h3 className="architecture">Architecture</h3>
                <img src="../../assets/Architecture.png" alt="architecture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About