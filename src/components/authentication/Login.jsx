import React from 'react'
import NormalForms from './NormalForms'; // Importing the reusable form component
import { loginFields } from './formFields'; // Importing the login form fields

// This component, accepts onSubmit as a prop
const Login = ({ onSubmit }) => {

    // Define the onSubmit function to handle form submission
    const handleSubmit = (formData) => {
        // Logic to handle form submission
        console.log(formData);
    };
    return (
        <div>Login</div>
    )
}

export default Login