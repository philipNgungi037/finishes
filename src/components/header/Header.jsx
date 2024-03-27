import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import './header.css'
import Search from './Search'

const Header = () => {
  return (
    <>
      {/* // All these below rendered scryRenderedComponentsWithType, make up the header. */}
      <header className='header-main hidden bg-blue-400 lg:flex justify-between items-center mt-4 px-0 lg:px-16 shadow-lg sticky top-0 z-50'>
        <Logo />
        <Search />
        <NavList />
      </header>
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