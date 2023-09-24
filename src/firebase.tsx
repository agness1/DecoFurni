// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrRfOKVzNj-_oaYWDjT9S5d_AGn4xg40o",
  authDomain: "decofurni-cea54.firebaseapp.com",
  projectId: "decofurni-cea54",
  storageBucket: "decofurni-cea54.appspot.com",
  messagingSenderId: "1069071794523",
  appId: "1:1069071794523:web:89e23c6d555d167020da7e",
  measurementId: "G-Z4GV3T7MGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);