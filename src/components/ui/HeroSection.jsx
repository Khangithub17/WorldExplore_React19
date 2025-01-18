import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <main className="hero-section main">
         <div className="container grid grid-two-cols">
           <div className="hero-content">
             <h1 className="heading-xl">Explore the world,one Country at a Time.</h1>
             <p className="paragraph">Discover the history, culture, and beauty of every nation. Sort,
             search, and filter through countries to find the details you need.</p>
             <button className="btn btn-darken btn-inline bg-white-box">Start Exploring <FaLongArrowAltLeft/></button>
           </div>
           <div className="hero-image">
             <img src="/images/hero.png" alt=""  className="banner-image"/>
   
           </div>
         </div>
       </main>
  )
}

export default HeroSection
