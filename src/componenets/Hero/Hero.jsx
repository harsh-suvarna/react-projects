import React from 'react'
import './Hero.css'
import Btn from "../Buttons/Btn"
import cnt from '../Hero/connect.jpg'

const Hero = () => {
  return (
    <>
    <div className='Herohead'>
      <Btn/>
      <form className='frm'>
       <div className='txt'>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' placeholder='Enter your name'/>
       </div>
       <div className='eml'>
        <label htmlFor='Email'>Email:</label>
        <input type='Email' name='Email' placeholder='Enter your Email'/>
       </div>
       <div className='area'>
        <label>Text:</label>
        <textarea name='text'></textarea>
       </div>
      </form>
      <div className='img' >
      <img src={cnt}/>
      </div>
    </div>
  
    </>
    
  )
}

export default Hero