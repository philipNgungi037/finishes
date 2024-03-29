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
        <div className='register mx-auto'>
       
        {/* Reusing the NormalForms component for rendering the login form */}
            <NormalForms
                fields={registerFields} // Passes register form fields imported from formFields.js
                onSubmit={handleSubmit} // Passes handleSubmit function to handle form submission
                buttonText="Register" // Text to display on the submit button
                className="bg-gray-100" // Additional CSS class for styling the form
            />
        </div>
    )
}

export default Register