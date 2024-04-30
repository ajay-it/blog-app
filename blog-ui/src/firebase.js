// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-2313b.firebaseapp.com",
  projectId: "blog-app-2313b",
  storageBucket: "blog-app-2313b.appspot.com",
  messagingSenderId: "366958137435",
  appId: "1:366958137435:web:b527deac942a122150af7e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
