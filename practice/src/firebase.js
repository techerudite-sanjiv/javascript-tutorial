// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCuajLrj-r-5x5FiTPSIuPgPqbMVHi6aA8",
  authDomain: "sampleapp-d5cef.firebaseapp.com",
  projectId: "sampleapp-d5cef",
  storageBucket: "sampleapp-d5cef.appspot.com",
  messagingSenderId: "129907107867",
  appId: "1:129907107867:web:dcfdfd6b6aa268315030be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app)