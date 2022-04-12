import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo_small.png';
import '../styles/header.styles.scss'

function Header(){
  return(
    <nav>
        <div className='logo_div'>
            <img src={logo} alt="logo_img" className='main_logo' />
        </div>
        <div className='nav_menu'>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor='menu-toggle'>
            <div className='menu-button'></div>
        </label>
            <ul className='menu'>
                <li>Home</li>
                <li>Our Service</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='menu_lang'>
            <span>En</span>
            <span>Jn</span>
        </div>
    </nav>
  )
}

export default Header;