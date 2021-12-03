// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbAK3BNgQYObvBJcOWESEVowSeJJXxieE",
  authDomain: "online-code-compiler.firebaseapp.com",
  projectId: "online-code-compiler",
  storageBucket: "online-code-compiler.appspot.com",
  messagingSenderId: "303029044216",
  appId: "1:303029044216:web:f9b234949b0c8f03f14c0d",
  measurementId: "G-QZT0WPH7NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);