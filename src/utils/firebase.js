// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASzg6_mIWamdCPu2ubkoJe3bzgqqVxYjs",
  authDomain: "netflixgpt-fd8a8.firebaseapp.com",
  projectId: "netflixgpt-fd8a8",
  storageBucket: "netflixgpt-fd8a8.firebasestorage.app",
  messagingSenderId: "503045621733",
  appId: "1:503045621733:web:13591502cb48c0dbaf910c",
  measurementId: "G-3HYX4N74YX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
