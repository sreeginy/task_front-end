import React, { useState } from 'react';
import './TopNavigation.css';
import Logo from '../../assets/Logo.png';
import menuIcon from "../../assets/menu.png";

const Navbar = () => {

    const[mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }


  return (
    <nav className='container'>
      <img src={Logo} alt="" className="logo" />

      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li className="home">HOME</li>
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>CAREERS</li>
      </ul>
      <img src={menuIcon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
