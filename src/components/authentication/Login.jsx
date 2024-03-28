import React from 'react'
import NormalForms from '../re-usable components/forms/NormalForms'; // Importing the reusable form component
import { loginFields } from '../re-usable components/forms/forms-data'; // Importing the login form fields

// This component, accepts onSubmit as a prop
const Login = ({ onSubmit }) => {

    // Define the onSubmit function to handle form submission
    const handleSubmit = (formData) => {
        // Logic to handle form submission
        console.log(formData);
    };
    return (
        <div className="container mx-auto"> 
            {/* Heading for the login form */}
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            {/* Reusing the NormalForms component for rendering the login form */}
            <NormalForms
                fields={loginFields} // Passes login form fields imported from formFields.js
                onSubmit={handleSubmit} // Passes onSubmit function to handle form submission
                buttonText="Login" // Text to display on the submit button
                className="bg-gray-100" // Additional CSS class for styling the form
            />
        </div>
    )
}

export default Login