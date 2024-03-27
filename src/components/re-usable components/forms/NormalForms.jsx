import React, { useState, useEffect } from 'react'

// component renders a form dynamically based on the provided fields. 
// It accepts props; fields (an array of objects representing form fields), onSubmit (a function to handle form submission), 
// buttonText (text to display on the submit button), 
// className (additional CSS classes for styling), and error (an optional error message to display).
const NormalForms = ({ fields, onSubmit, buttonText, className, error }) => {

  // Define initial form state based on the specific fields
  const initialFormState = Object.fromEntries(fields.map((field) => [field.name, '']));
  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState(error);
  
  return (
    <div>NormalForms</div>
  )
}

export default NormalForms