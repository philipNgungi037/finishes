import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import './header.css'
import Search from './Search'

const Header = () => {
  return (
    // All these below rendered scryRenderedComponentsWithType, make up the header.
    <header className='header-main flex justify-between items-center mt-4 px-16 shadow-lg sticky top-0 z-50'>
        <Logo/>
        <Search/>
        <NavList/> 
    </header>
  )
}

export default Header