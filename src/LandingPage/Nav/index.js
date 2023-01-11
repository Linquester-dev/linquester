import React from 'react'
import './index.css'
import {FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
       <nav className='main-nav'>
        <div className='logo'>
            <h2><span>L</span>INQUESTER</h2>
        </div>
<div className='menu-link'>
    <ul><li ><a href='#' className='nav-item'>HOME</a></li></ul>
    <ul><li><a href='#working' className='nav-item'>Working</a></li></ul>
    <ul><li><a href='#about' className='nav-item'>About us</a></li></ul>
    <ul><li><a href='#Foot' className='nav-item'>Contact</a></li></ul>
</div>
<div className='social-media'>
   <ul className='social-media-desktop'>
    <li><a href='#' target="_blank"><FaTwitter className='youtube'/></a></li>
    <li><a href='#' target="_blank"><FaInstagram className='youtube'/></a></li>
    <li><a><FaYoutube className="icons"/></a></li>
   </ul>
</div>
       </nav>
    </>
  )
}

export default Navbar