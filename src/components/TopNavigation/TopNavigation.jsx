import React from 'react';
import './TopNavigation.css';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={Logo} alt="" className='logo' />

      <ul>
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>CAREERS</li>
      </ul>
    </nav>
  )
}

export default Navbar
