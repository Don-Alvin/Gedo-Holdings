import './App.css'
import React from 'react'
import { About, Blog, Contact, Footer, Hero, Navbar, Testimonials, Work } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

