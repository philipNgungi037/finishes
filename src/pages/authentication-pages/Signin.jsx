import React from 'react'
import Logo from '../../components/header/Logo'
import Login from '../../components/authentication/Login'

const Signin = () => {

  // Define the onSubmit function to handle form submission
  const handleSubmit = (formData) => {
    // Logic to handle form submission
    console.log(formData);
  };
  return (
    <div className='signin-page w-full h-auto bg-gray-200'>
        <div className='signin-logo'>
          <Logo />
          <h1 className='signin-title p-4 text-center'>
            Access your account
          </h1>
        </div>
      <div className='signin-login-container flex justify-center items-center '>
        <Login onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default Signin