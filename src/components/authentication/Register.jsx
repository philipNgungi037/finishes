import React from 'react'
import NormalForms from '../re-usable components/forms/NormalForms'; // Importing the reusable form component
import { registerFields } from '../re-usable components/forms/forms-data'; // Importing the login form fields

const Register = () => {

      // Define the onSubmit function to handle form submission
    const handleSubmit = (formData) => {
        // Handle form submission logic here
        console.log("Form submitted with data:", formData);
      };
  return (
    <div>Register</div>
  )
}

export default Register