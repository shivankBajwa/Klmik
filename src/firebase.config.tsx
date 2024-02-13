// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9l1LG9GinyWcVe7hCgO09boT6yfPulng",
  authDomain: "klmik-c7037.firebaseapp.com",
  projectId: "klmik-c7037",
  storageBucket: "klmik-c7037.appspot.com",
  messagingSenderId: "396379373601",
  appId: "1:396379373601:web:5f5d49d840dc34aabaa360",
  measurementId: "G-WXBZ1FJDPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);