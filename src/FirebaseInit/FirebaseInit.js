// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeljiMep4-hoqHcHGLe51eV-Wuge0H8Zg",
  authDomain: "email-pass-auth-d4082.firebaseapp.com",
  projectId: "email-pass-auth-d4082",
  storageBucket: "email-pass-auth-d4082.firebasestorage.app",
  messagingSenderId: "615467049752",
  appId: "1:615467049752:web:05a52fe58caeb45aaaf46d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
