import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'


function NavBar() {
  return (
    <header>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>

    </header>
  )
}

export default NavBar