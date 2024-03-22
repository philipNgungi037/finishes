import React from 'react'
import { importantLinks } from './footer-data'
//This component will be displaying important links. It will import the links from Footer-data File. then .map will be used to display each link.
const ImportantLinks = () => {
  return (
    <div className=' '>
        <h1 className='important-title mb-4 font-bold'>
            Important Links
        </h1>
        <div className='important-links '>
            {
                importantLinks.map(
                    (link, index) =>
                    <ul>
                        <li key={index}>
                            {link.name}
                        </li>
                    </ul>
                )
            }
        </div>

    </div>
  )
}

export default ImportantLinks