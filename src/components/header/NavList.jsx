import React, { useState, useEffect } from 'react'
import Navs from './NavData'
import { NavLink } from 'react-router-dom';
const NavList = () => {
    // state to open/close toggle-menu
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown whether its visible or not

    //function to toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // // Check user info on component mount
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
    
        if (user && user.username) {
            setUsername(user.username); // Set the username if user is logged in
        } else {
            setUsername(null); // Clear username if not logged in
        }
    }, []);
    

    // Get the updated NavData based on username state
    const navItems = Navs(username);


    return (
        <div className='nav-list flex justify-end items-center'>
            <nav className='navs'>

                {/* Access Navs data, then map over it displaying them in flex list, the second last item in the list is backgrounded as yellow */}
                <ul className='flex justify-end gap-2 text-xs lg:text-sm '>
                    {
                        navItems.map(
                            (nav, index) =>
                                <li className={`nav-item  ${index === navItems.length - 2 ? 'yellow-bg' : ''}`} key={index}>
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