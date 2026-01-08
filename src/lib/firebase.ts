
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnhDQiq8aQ3dMp7OjsKNc7cFHq8MKfECM",
  authDomain: "studio-5726499158-ca80e.firebaseapp.com",
  projectId: "studio-5726499158-ca80e",
  storageBucket: "studio-5726499158-ca80e.firebasestorage.app",
  messagingSenderId: "547837133157",
  appId: "1:547837133157:web:13b7317b1454366f50218c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { app, auth, db }; // Export db
