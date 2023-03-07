import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom'
import "./navbar.css"
export const navbar = () => {
  return (
    <>

    <nav className='main-nav' >
    <div className='logo'>
    <h2>
        <span>Taxi</span>
        <span>Service</span>
    </h2>
    </div>
    <div className='menu-link'>
       <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About Us</Link>
        </li>
        <li>
            <Link to='#'>Our Fleet</Link>
        </li>
        <li>
            <Link to='#'>Contact Us</Link>
        </li>
        <li>
            <Link to='#'>Business Account</Link>
        </li>
        </ul> 
    </div>

    <div className='login'>
        <ul className='login-desktop'>
            <li>
            <button  className='signUpButton'>SIGN UP</button>
        </li>
        <li>
        <button className='loginButton'>LOGIN</button>
        
        </li>
        </ul>

        <div className='hamburger-menu'>
                <Link to ='#'>
                    <GiHamburgerMenu/>
                </Link>

        </div>

    </div>
        

    </nav>


    </>
  )
}
export default navbar
