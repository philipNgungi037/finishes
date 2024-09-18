import React from 'react'
import Logo from '../../components/header/Logo'
import Register from '../../components/authentication/Register'
import { useAuth } from '../../components/contexts/AuthContext'; 

// This component will be rendering all signup/register UIs
const Signup = () => {
        // Define the onSubmit function to handle form submission
        const handleSubmit = (formData) => {
            // Handle form submission logic here
            console.log("Form submitted with data:", formData);
        };
  return (
    <div className='signup-page  w-full h-full bg-gray-200 '>
        <Logo/>
        <h1 className='signin-title p-4 text-center'>
        Create an Account
      </h1>
      <Register onSubmit={handleSubmit}  />

    </div>
  )
}

export default Signup