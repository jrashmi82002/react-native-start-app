// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXbvxFHZATsQhInMazANZ3S_b22cVMes0",
  authDomain: "start-app-f43ea.firebaseapp.com",
  projectId: "start-app-f43ea",
  storageBucket: "start-app-f43ea.appspot.com",
  messagingSenderId: "508715402935",
  appId: "1:508715402935:web:17293a2565d8e8b3e86f32",
  measurementId: "G-TTQY7KRM7B"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firebase_db = getFirestore(firebase_app);
export const firebase_google_auth = new GoogleAuthProvider();
