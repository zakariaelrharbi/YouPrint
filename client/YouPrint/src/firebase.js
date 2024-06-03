// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // because we are using vite we can access the environment variables using import.meta.env
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "youprint-71a8a.firebaseapp.com",
  projectId: "youprint-71a8a",
  storageBucket: "youprint-71a8a.appspot.com",
  messagingSenderId: "512518188198",
  appId: "1:512518188198:web:2ed9bd16f359136a369867"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
