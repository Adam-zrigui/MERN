// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXQ9F__7wOOrYSdCZ2EzlqQFakh2lUHBE",
  authDomain: "crud-592e4.firebaseapp.com",
  projectId: "crud-592e4",
  storageBucket: "crud-592e4.appspot.com",
  messagingSenderId: "500777140134",
  appId: "1:500777140134:web:dafe73788e667a7c30d967",
  measurementId: "G-9F1738RR7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
