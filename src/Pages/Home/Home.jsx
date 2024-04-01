import React from 'react'
import Hero from './Components/Hero/Hero'
import Benefits from './Components/Benefits/Benefits'
import Courses from './Components/Courses/Courses'
import Testimonial from './Components/Testimonials/Testimonial'
import Pricing from './Components/Pricing/Pricing'
import Faq from './Components/Faq/Faq'
import Navbar from '../../Components/Navbar/Navbar'

import "./Home.css"
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <Hero/>
    <Benefits/>
    <Courses/>
    <Testimonial/>
    <Pricing/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Home