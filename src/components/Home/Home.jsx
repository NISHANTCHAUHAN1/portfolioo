import React from 'react'
import './Home.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resumePdf from '../../assets/NishantResume.pdf.pdf';

const Home = () => {
  return (
    <div id='home' className='home'>
       <img className='profile_img' src={'/portfoliooo.png'} alt="" />
       <h1> <span>I'm Nishant,</span> Forntend developer based in India.</h1>
       <p className='home-p'>Thanks for visiting my site, its really nice to have you here.</p>
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
