// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA1n7j-hpUIFvEIACPrhGn6VFSSKkyTvI",
  authDomain: "anotherchatapp-b7659.firebaseapp.com",
  projectId: "anotherchatapp-b7659",
  storageBucket: "anotherchatapp-b7659.appspot.com",
  messagingSenderId: "22218287298",
  appId: "1:22218287298:web:ee8027acf484321766335b",
  measurementId: "G-V3MRWJVC3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
