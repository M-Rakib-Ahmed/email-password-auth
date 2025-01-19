// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzNtNnBaNn7rJdDrV1fWEtO2PAEzrFzrQ",
  authDomain: "email-password-aurth-4662d.firebaseapp.com",
  projectId: "email-password-aurth-4662d",
  storageBucket: "email-password-aurth-4662d.firebasestorage.app",
  messagingSenderId: "209464555816",
  appId: "1:209464555816:web:1111d16a43b49ecfae381d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
