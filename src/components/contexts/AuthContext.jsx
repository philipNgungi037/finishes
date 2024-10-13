import { useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useState } from 'react';


// Create context
const AuthContext = createContext();


// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);



// AuthProvider to wrap the application and provide authentication-related data
export const AuthProvider = ({ children }) => {

  
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const signup = async (userData) => {
    try {
      setSuccessMsg('');
      setErrorMsg('');
  
      
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ user: userData }), // Wrap user data in { user: ... }
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to create an account. Please try again.'
        );
      }
  
      const data = await response.json();
      setSuccessMsg('Account created successfully!');
      navigate('/signin')
      console.log('User created:', data);
    } catch (error) {
      console.error('Error during signup:', error.message);
      setErrorMsg(error.message);
    }
  };
  

  const login = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: formData.email,
            password: formData.password,
          },
        }),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      const data = await response.json();
      setSuccessMsg(data.message);
      setErrorMsg(''); // Clear any previous error messages
      navigate ('/')
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  

  return (
    <AuthContext.Provider value={{ signup, login, successMsg, errorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};
