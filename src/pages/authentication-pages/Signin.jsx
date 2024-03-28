import React from 'react'
import Logo from '../../components/header/Logo'
import Login from '../../components/authentication/Login'

const Signin = () => {
  return (
    <div className='signin-page w-full h-full bg-gray-200'>
      <Logo />
      <h1 className='signin-title p-4 text-center'>
        Access your account.
      </h1>
      <Login />
    </div>
  )
}

export default Signin