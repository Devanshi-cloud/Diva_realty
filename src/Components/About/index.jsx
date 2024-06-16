import React from 'react'
import "./About.css"
import aboutImage from "/Users/devanshi/Desktop/diva_realestate/src/assets/about-image.jpeg"
import { whyChooseUs } from "../../sources"

const About = () => {
  return (
    <section id='about'>
        <div className="wrapper">
          <div className='column'>
            <div className='picture'>
              <img src={aboutImage} alt="" />
            </div>
          </div>
          <div className='column'>
            <h1 className="heading-1">
              <span className="gradient-text">About us</span>
            </h1>
            <p className='muted'>
            We offer a range of services designed to cater to 
            the diverse needs of our customers, including 
            property management, marketing and sales, and 
            construction.
            </p>
            <div className="group">
              {
                whyChooseUs.map((list, index)=>(
                  <div className='flex-center group-item' key={index}>
                    <div className="flex-center icon-wrapper">
                      {list.icon}
                    </div>
                    <h4 className='title'>{list.title}</h4>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        </section>
  )
}

export default About