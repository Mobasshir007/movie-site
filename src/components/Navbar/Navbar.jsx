import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import NOTFLIX from '../../assets/Images/NOTFLIX.png'
import search from '../../assets/Images/search.svg'
import bell from '../../assets/Images/bell.svg'
import profile from '../../assets/Images/profile.png'
import caret from '../../assets/Images/caret.svg'
import { logout } from '../../firebase'


const Navbar = () => {

  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if (window.scrollY>=80) {
        navRef.current.classList.add('nav-dark')
      }else{
      navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])
  
  return (
    <div ref={navRef} className='Navbar'>
      <div className='navbar-left'>
        <img className='logo' src={NOTFLIX} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Favourites</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img  src={search} alt="search icon" className='icons' />
        <img src={bell} alt="bell icon" className='icons' />
        <p>Children</p>
        <div className="navbar-profile">
          <img src={profile} alt="profile-img" className='profile' />
          <img src={caret} alt="caret-icon" className='icons' />
          <div onClick={()=>{logout()}} className="dropdown">Sign Out</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar