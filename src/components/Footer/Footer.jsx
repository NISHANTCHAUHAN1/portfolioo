import React from 'react'
import './footer.css'

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <span>NisH</span>
            <p>Hello there! I'm a frontend developer developer base in Delhi, with a passion for building beautiful and functional websites.</p>
        </div>
        <div className="footor-top-right">
            <div className="footer-icons">
             <a href="https://www.linkedin.com/in/nishant-chauhan-b76371255/">
             <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
             </a>
            </div>

            <div className="footer-icons">
              <a href="https://github.com/NISHANTCHAUHAN1">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="" />
              </a>
            </div>
        </div>
      </div>

      <hr className='footer-hr'/>

      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2023 Nishant. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
