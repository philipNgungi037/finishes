import React, { createContext, useContext, useState } from 'react';
import { auth, fs } from '../../config/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
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
      //customizing our error message to the UI
      let message = 'An error occurred during signup.';
      if (error.code === 'auth/email-already-in-use') {
        message = 'Oops! User already exists.';
      } else if (error.code === 'auth/invalid-email') {
        message = 'The email address is not valid.';
      } else if (error.code === 'auth/weak-password') {
        message = 'The password is too weak, atleast 6 characters';
      }
      setErrorMsg(message);
    }
  };

  //this is the function to login an user to the app
  const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in: ", userCredential.user);
      setSuccessMsg('Login successful');
      
    } catch (error) {
      setErrorMsg('Login failed: ' + error.message);
    }
  };
  

  return (
    <AuthContext.Provider value={{ signup, login, successMsg, errorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};
