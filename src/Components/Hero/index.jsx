import React from 'react'
import "./Hero.css"
import { Link } from 'react-scroll'
import heroImage from "../../assets/realist-hero.png"
import Achievement from '../../Commons/Achievement'

const Hero = () => {
  return (
    <header id='hero'>
        <div className='wrapper'>
            <div className='column'>
                <h1 className='heading-1'>
                    <span className='gradient-text'>Find Your Dream Home with Diva's Realty</span>
                </h1>
                <p className="muted">Diva's Realty is built on a foundation 
                of core values that prioritize customer satisfaction, 
                digital transformation, partnerships, performance, 
                and a holistic approach. The company's commitment 
                to delivering exceptional services is reflected 
                in its passion for excellence and dedication to 
                staying ahead of the curve. With a focus on customer 
                orientation, digital innovation, and strategic partnerships, 
                Diva's Realty is well-positioned to meet the evolving needs of 
                its customers and drive success in the real estate market.
                </p>
                <Achievement/>
                <div className="flex-center buttons-wrapper">
                    <Link to='contact' smooth={true} className='btn'>Learn more</Link>
                    <Link to='properties' smooth={true} className='btn primary'>Explore Properties</Link>
                </div>
            </div>
            <div className="column hero-image">
                <img src={heroImage} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Hero