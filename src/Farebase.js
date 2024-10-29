// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbPJoZcva_y_T7lW5cK-oScCayS6VbEKk",
  authDomain: "starbuks-authorization.firebaseapp.com",
  projectId: "starbuks-authorization",
  storageBucket: "starbuks-authorization.appspot.com",
  messagingSenderId: "649332319587",
  appId: "1:649332319587:web:9a9a69dd21caeb6edb1f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);