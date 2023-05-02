// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6RIzDEKdGtSyNyPQWvHvN7smyKfLM6rQ",
  authDomain: "chif-master.firebaseapp.com",
  projectId: "chif-master",
  storageBucket: "chif-master.appspot.com",
  messagingSenderId: "1088545724862",
  appId: "1:1088545724862:web:44932dca3ab575828181ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;