import React from 'react'
import img from '../navigation/contactus.jpg'
import './Navigation.css'

const Navigation = () => {
  return (
    <> 
     <nav className="container">
      <div className='nav-img'>
        <img src={img}/>
      </div>
      <ul >
        <li href="#">Home</li>
        <li href='#'>About</li>
        <li href='#'>Contact</li>
      </ul>
    </nav>

    </>
   
   
  )
}

export default Navigation