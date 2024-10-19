import React, { useState, useEffect } from 'react'
import Navs from './NavData'
import { NavLink } from 'react-router-dom';
const NavList = () => {
    // state to open/close toggle-menu
    const [isOpen, setIsOpen] = useState(false);

    //function to toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

      // Check token and user info on component mount
      useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (token && user && user.username) {
            setUsername(user.username); // Set the username if token and user data are available
        } else {
            setUsername(null); // Clear username if not logged in
        }
    }, []); // Run only once on component mount


    return (
        <div className='nav-list flex justify-end items-center'>
            <nav className='navs'>

                {/* Access Navs data, then map over it displaying them in flex list, the second last item in the list is backgrounded as yellow */}
                <ul className='flex justify-end gap-2 text-xs lg:text-sm '>
                    {
                        Navs.map(
                            (nav, index) =>
                                <li className={`nav-item  ${index === Navs.length - 2 ? 'yellow-bg' : ''}`} key={index}>
                                    <NavLink
                                        to={nav.link}

                                    >
                                        <span dangerouslySetInnerHTML={{ __html: nav.icon }} className='mr-1 ' />
                                        {nav.name}
                                    </NavLink>
                                </li>
                        )
                    }
                </ul>
            </nav>

            {/* //menu-button */}
            <div className="menu lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="menu-button text-xl hover:border hover:border-yellow-400 "
                >
                    {isOpen
                        ? <ion-icon name="close-outline" />
                        : <ion-icon name="menu-outline" />}
                </button>
            </div>


        </div>

    )
}

export default NavList