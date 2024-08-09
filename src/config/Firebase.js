// Import the functions from the SDKs as needed
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
// Add SDKs for Firebase products to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4vGq44TiwueAS7RSaG0dn0GAtsz4gsfo",
  authDomain: "my-ecom-3cfb3.firebaseapp.com",
  projectId: "my-ecom-3cfb3",
  storageBucket: "my-ecom-3cfb3.appspot.com",
  messagingSenderId: "386623068298",
  appId: "1:386623068298:web:2b9109f79c782529513573",
  measurementId: "G-MGM1JC6XTL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const fs = firebase.firestore();
const storage = firebase.storage();
export {auth,analytics,fs,storage};
