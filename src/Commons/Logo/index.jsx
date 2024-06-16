import React from 'react'
import "./Logo.css"
import { MdRealEstateAgent } from 'react-icons/md'

const Logo = () => {
  return (
    <div className='logo'>
         <MdRealEstateAgent className="icon"/>
         <h1>Diva's Realty</h1>
    </div>
  )
}

export default Logo