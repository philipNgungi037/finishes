import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import './header.css'
import Search from './Search'

const Header = () => {
  return (
    // All these below rendered scryRenderedComponentsWithType, make up the header.
    <header className='header-main flex justify-between items-center mt-8 '>
        <Logo/>
        <Search/>
        <NavList/> 
    </header>
  )
}

export default Header