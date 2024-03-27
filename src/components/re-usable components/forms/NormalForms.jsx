import React, { useState, useEffect } from 'react'

// component renders a form dynamically based on the provided fields. 
// It accepts props; fields (an array of objects representing form fields), onSubmit (a function to handle form submission), 
// buttonText (text to display on the submit button), 
// className (additional CSS classes for styling), and error (an optional error message to display).
const NormalForms = ({ fields, onSubmit, buttonText, className, error }) => {

  // Define initial form state based on the specific fields
  const initialFormState = Object.fromEntries(fields.map((field) => [field.name, '']));

  // Set up state for form data and form error
  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState(error);

  // Update formError state when the error prop changes
  useEffect(() => {
    setFormError(error);
  }, [error]);

  // Function to handle input changes and update formData state as the user types.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };



  return (
    <form className={`w-full md:w-1/2 lg:w-full p-4  bordeborder-black  rounded-md ${className}`} onSubmit={handleSubmit}>

      {/* Map over fields array to render form inputs */}
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label htmlFor={field.name} className="block text-gray-700 text-sm font-bold mb-2">
            {field.label}
          </label>
          <input
            type={field.type || 'text'}
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full  px-8 lg:px-8 py-4 lg:py-6 border-b border-blue-500 text-start "
          />
        </div>
      ))}

      {/* Display form error if any */}
      {formError && (
        <div className="text-red-500 mb-4">
          {formError}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-4 lg:p-6 my-6 lg:my-8 rounded-md hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </form>
  )
}

export default NormalForms
