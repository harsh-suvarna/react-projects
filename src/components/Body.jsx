import React from 'react'
import she from "../images/shoe.jpg" 
import flip from '../images/flip.jpg'
import amaz from '../images/amaz.jpg'

const Body = () => {
  return (
    <>
    <main className='hero'>
     <div className='hero-content'>
      <h1>YOUR FEET DESERVES BETTER</h1>
      <p>YOUR FEET DESERVES BETTER WE ARE HERE TO HELP YOU TO FIND THE BEST SHOES SHOP NOW</p>
      <div className='hero-btn'>
        <button className='shop-btn'>SHOP NOW</button>
        <button className='cat-btn'>CATEGORY</button>
      </div>
      <div className='hero-foot'>
        <div>
         <p>ALSO AVAILABLE ON</p>
        </div>
        <div className='shop-img'>
        <img src={flip}/>
        <img src={amaz}/>
        </div>
      </div>
     </div>
     <div className='hero-img'>
      <img src={she}/>
     </div>
    </main>
    </>

    
  )
}

export default Body