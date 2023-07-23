import {getAnalytics} from "firebase/analytics";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATXqX7Ygq4-AZDTO6dTxgrp5nAMBxrohs",
  authDomain: "ds-nextjs-firestore.firebaseapp.com",
  projectId: "ds-nextjs-firestore",
  storageBucket: "ds-nextjs-firestore.appspot.com",
  messagingSenderId: "487202081436",
  appId: "1:487202081436:web:36f8316180ec63de0f7b59",
  measurementId: "G-8JE9MYY2KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  getAnalytics(app);
}

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)

export const signOut = () => auth.signOut()

