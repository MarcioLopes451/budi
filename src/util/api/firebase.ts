import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBWKXCf1hSauWYyQgHHth3Lb3Gx8U4F6C0",
  authDomain: "budi-5347f.firebaseapp.com",
  projectId: "budi-5347f",
  storageBucket: "budi-5347f.firebasestorage.app",
  messagingSenderId: "887089071950",
  appId: "1:887089071950:web:0dd9de8dd5a9142aeb001f",
  measurementId: "G-8GRVGME6FH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);