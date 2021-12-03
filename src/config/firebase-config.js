import firebase from 'firebase/compat/app';
// import 'firebase/analytics'

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
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;