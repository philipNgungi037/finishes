import React, { createContext, useContext, useState } from 'react';
import { auth, fs } from '../../config/Firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore'; 

// Create context
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider to wrap the application and provide authentication-related data
export const AuthProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

 
  const signup = async ({ username, email, password }) => {
    try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      
      const usersCollection = collection(fs, 'users'); // Reference to 'users' collection
      const userDoc = doc(usersCollection, credentials.user.uid); // Reference to the user's document
      
      await setDoc(userDoc, {
        username: username,
        email: email,
      });
      
      setSuccessMsg('User created successfully');
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  

  return (
    <AuthContext.Provider value={{ signup, successMsg, errorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};
