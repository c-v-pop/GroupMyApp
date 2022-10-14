import React from 'react'
import icon from '../../images/icon-left-font-monochrome-black.svg'

export const Header = () => {
  return (
      <div className='topbar'>
        <header className='header_container'>
        <img src={icon} alt="world logo" id='header_logo'/>
        </header>
        <nav className='navbar'>
        <a href="/EditUser">Profile</a>
        <a href='/Dashboard'>Home</a>
        <a href="/Logout">Logout</a>
        </nav>
    </div>
  )
}
