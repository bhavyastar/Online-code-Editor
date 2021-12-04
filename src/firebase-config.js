import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAbAK3BNgQYObvBJcOWESEVowSeJJXxieE",
  authDomain: "online-code-compiler.firebaseapp.com",
  projectId: "online-code-compiler",
  storageBucket: "online-code-compiler.appspot.com",
  messagingSenderId: "303029044216",
  appId: "1:303029044216:web:f9b234949b0c8f03f14c0d",
  measurementId: "G-QZT0WPH7NE"
};



const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

export default authentication;