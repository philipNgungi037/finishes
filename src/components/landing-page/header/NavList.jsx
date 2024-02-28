import React, {useState} from 'react'
import Navs from './NavData'

const NavList = () => {
     // state to open/close toggle-menu
  const [isOpen, setIsOpen] = useState(false);

   //function to toggle
   const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    return (
        <div className='nav-list px-16'>
            <nav className='navs'>

                {/* Access Navs data, then map over it displaying them in flex list, the second last item in the list is backgrounded as yellow */}
                <ul>
                    {
                        Navs.map(
                            (nav, index) =>
                                <li className={`nav-item ${index === Navs.length - 2 ? 'yellow-bg' : ''}`} key={index}>
                                    {/* Render the icon as HTML */}
                                    <span dangerouslySetInnerHTML={{ __html: nav.icon }} className='mr-1' />
                                    {nav.name}
                                </li>
                        )
                    }
                </ul>
            </nav>


        </div>
    )
}

export default NavList