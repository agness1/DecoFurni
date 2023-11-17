import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXaWsORMjzItafY-RifBXdTCS8UrMR6-o",
  authDomain: "shop2-92044.firebaseapp.com",
  databaseURL: "https://shop2-92044-default-rtdb.firebaseio.com",
  projectId: "shop2-92044",
  storageBucket: "shop2-92044.appspot.com",
  messagingSenderId: "861476280602",
  appId: "1:861476280602:web:6a73187bd8b76857c634a3",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
