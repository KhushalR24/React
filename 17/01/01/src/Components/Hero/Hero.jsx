import React from 'react'
import './Hero.css'

const Hero = () => {
  return (

    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET
          DESERVE
          THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='btn'>
          <button className='btn-1'>Shop Now</button>
          <button className='btn-2'>Category</button>
        </div>
        <p>Also Available On</p>
        <div className="brand-logo">
          <img src="../../../public/Images/flipkart.png" alt="Flipkart" />
          <img src="../../../public/Images/amazon.png" alt="Amazon" />
        </div>
      </div>
      <div className="hero-image">
        <img src="../../../public/Images/shoe_image.png" alt="Shoe-image" />
      </div>
    </div>

  )
}

export default Hero