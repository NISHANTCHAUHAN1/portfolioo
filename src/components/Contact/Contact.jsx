import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import loaction_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6bdf4447-39e7-434b-9e68-f9f10d36c69b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
    onSubmit('')
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    {/* <p>nishchaynish8@gmail.com</p> */}
                    <a href="mailto: nishchaynish8@email.com" target='_blank'><p>nishchaynish8@gmail.com</p></a>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    {/* <p>8735679878</p> */}
                    <a href="https://wa.me/918766275787?text=Hi">8766275781</a>
                </div>
                <div className="contact-detail">
                    <img src={loaction_icon} alt="" />
                    <p>Delhi, India</p>
                </div>
            </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact