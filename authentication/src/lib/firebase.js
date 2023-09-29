// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authentication-501ca.firebaseapp.com",
  projectId: "authentication-501ca",
  storageBucket: "authentication-501ca.appspot.com",
  messagingSenderId: "562276023032",
  appId: "1:562276023032:web:941cd26a2e6fba7a52590d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);