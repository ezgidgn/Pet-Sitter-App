// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import Constants from 'expo-constants';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjAs8uTyukXRTtILUJlM0-xN2qhP5awtM",
  authDomain: "pet-sitter-72b05.firebaseapp.com",
  projectId: "pet-sitter-72b05",
  storageBucket: "pet-sitter-72b05.appspot.com",
  messagingSenderId: "1088127886165",
  appId: "1:1088127886165:web:f5b4bd8cf5169aae56c5dc",
  measurementId: "G-L7LRK0WDJL",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH= getAuth(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);

export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);   