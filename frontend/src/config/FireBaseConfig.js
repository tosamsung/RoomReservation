// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3VOzu5FfDX8uXW16CviRlKaLnTHg8530",
  authDomain: "hotelboo-7d4dd.firebaseapp.com",
  projectId: "hotelboo-7d4dd",
  storageBucket: "hotelboo-7d4dd.appspot.com",
  messagingSenderId: "1071887904326",
  appId: "1:1071887904326:web:30ae9a4a86e106002ba447",
  measurementId: "G-FHWSS2MSXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);