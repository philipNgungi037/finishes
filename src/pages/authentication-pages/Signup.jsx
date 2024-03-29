import React from 'react'
import Logo from '../../components/header/Logo'
import Register from '../../components/authentication/Register'

// This component will be rendering all signup/register UIs
const Signup = () => {
  return (
    <div className='signup-page  w-full h-full bg-gray-200'>
        <Logo/>
        <h1 className='signin-title p-4 text-center'>
        Access your account.
      </h1>
      <Register/>

    </div>
  )
}

export default Signup