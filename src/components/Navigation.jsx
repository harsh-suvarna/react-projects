import React from 'react'
import img from '../images/logo.jpg'

const Navigation = () => {
  return (
    <nav className='navbar'>
        <div classname='imagess'>
          <img src={img}/>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">location</li>
          <li href="#">about</li>
          <li href="#">contact</li>
        </ul>
        <button>login</button>
       </nav>
  )
}

export default Navigation