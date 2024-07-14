import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg' 
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img onClick={openMenu} className='nav-mob-open' src={menu_open} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} className='nav-mob-close' src={menu_close} alt="" />
        <li><AnchorLink className='anchor-link'href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === 'home' ? <img src={underline} alt=''/> : <></> }</li> 
        <li><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={() => setMenu('about')}>About Me</p></AnchorLink>{menu === 'about' ? <img src={underline} alt=''/> : <></> }</li> 
        <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() => setMenu('projects')}>Projects</p></AnchorLink>{menu === 'projects' ? <img src={underline} alt=''/> : <></> }</li> 
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} alt=''/> : <></> }</li> 
        {/* <li> </li>  */}
      </ul>
      <div className="nav-connect" > <AnchorLink className='anchor-link'href='#contact'><p>Connect With Me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar
