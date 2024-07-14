import React from 'react'
import './Home.css'
import port_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resumePdf from '../../assets/Nishantresume.pdf';

const Home = () => {
  return (
    <div id='home' className='home'>
       <img className='profile_img' src={port_img} alt="" />
       <h1> <span>I'm Nishant,</span> Forntend developer based in India.</h1>
       <p className='home-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique eum repellendus.</p>
       <div className="hero-action">
        <div className='hero-connect'><AnchorLink className='anchor-link' href='#contact'><p>Connect With Me</p></AnchorLink></div>
        <div className="hero-resume">
          <a href={resumePdf}>My Resume</a>
        </div>
       </div>
    </div>
  )
}

export default Home
