import React from 'react'
import { MdMessage, MdOutlineEmail  } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import './Button.css'

const Btn = () => {
  return (
    <div>
     <div className='btn-h'>
      <button className='primary_btn'><MdMessage/>Via support CHAT</button>
      <button className='secondary_btn'><IoMdCall/>Via CALL</button>
     </div>
     <div className='btn-i'>
      <button className='third_btn'><MdOutlineEmail/>Via Email</button>
     </div> 
    </div>
  )
}

export default Btn