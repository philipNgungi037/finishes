import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import './header.css'
import Search from './Search'

const Header = () => {
  return (
    <>
      {/* // All these below rendered components , make up the header. */}
      {/* To enhance responsiveness, i split header into 2. one will be hidden in small screens while other will be visible to bigger screens and vice versa. */}
      {/* a header only visible to big screens */}
      <header className='header-main hidden bg-blue-400 lg:flex justify-between items-center mt-4 px-0 lg:px-16 shadow-lg sticky top-0 z-50'>
        <Logo />
        <Search />
        <NavList />
      </header>

        {/* this header is only visible small/phone screens */}
      <header className='header-main lg:hidden grid grid-cols-2 items-center bg-blue-400  '>
        <Logo />
        <NavList />
        <div className='col-span-2 '>
          <Search />
        </div>
      </header>
    </>
  )
}

export default Header