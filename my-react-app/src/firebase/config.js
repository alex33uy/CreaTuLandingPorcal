import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
  const firebaseConfig = {
    apiKey: "AIzaSyD_nukVrQWJ71c5ARaj5yAegVUE2bqwtbY",
    authDomain: "react-api-coder.firebaseapp.com",
    projectId: "react-api-coder",
    storageBucket: "react-api-coder.firebasestorage.app",
    messagingSenderId: "977353633849",
    appId: "1:977353633849:web:5d795b49da8fe5a55ddde8",
    measurementId: "G-Y86EERY41T"
  };


  const app1 = initializeApp(firebaseConfig);
  

 export const db = getFirestore(app1);
