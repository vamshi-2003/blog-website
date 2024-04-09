// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-aca62.firebaseapp.com",
  projectId: "mern-blog-aca62",
  storageBucket: "mern-blog-aca62.appspot.com",
  messagingSenderId: "507598018530",
  appId: "1:507598018530:web:b043c66df14fbafcd34bbb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);