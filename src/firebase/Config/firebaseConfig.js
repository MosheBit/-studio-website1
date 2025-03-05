import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdfuiEU9wrQNZniiCSQCg_ow1K0OJJ4xs",
    authDomain: "contactformproject-70a1f.firebaseapp.com",
    databaseURL: "https://contactformproject-70a1f-default-rtdb.firebaseio.com",
    projectId: "contactformproject-70a1f",
    storageBucket: "contactformproject-70a1f.firebasestorage.app",
    messagingSenderId: "279103711237",
    appId: "1:279103711237:web:bc0922688d40349d3c546c",
    measurementId: "G-KM7SBRWRMB"
  };
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
