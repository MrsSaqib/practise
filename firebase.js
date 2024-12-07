// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getFirestore, collection, addDoc, getDocs, doc, setDoc, updateDoc, serverTimestamp, arrayUnion, arrayRemove, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBj3Szw9LmGNSjdgrM3AylyrkHLe_KZGNU",
//     authDomain: "online-classes-9dd3c.firebaseapp.com",
//     projectId: "online-classes-9dd3c",
//     storageBucket: "online-classes-9dd3c.firebasestorage.app",
//     messagingSenderId: "72668153771",
//     appId: "1:72668153771:web:93d5dabea4ff6345ccb4ee",
//     measurementId: "G-X1LXVHDPZF"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);

// export { auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, signInWithPopup, GoogleAuthProvider, provider, getFirestore, db, collection, addDoc, getDocs, doc, setDoc, updateDoc, serverTimestamp, arrayUnion, arrayRemove, deleteDoc }// Import Firebase modules

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, query, where } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Add your Firebase configuration here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj3Szw9LmGNSjdgrM3AylyrkHLe_KZGNU",
    authDomain: "online-classes-9dd3c.firebaseapp.com",
    projectId: "online-classes-9dd3c",
    storageBucket: "online-classes-9dd3c.firebasestorage.app",
    messagingSenderId: "72668153771",
    appId: "1:72668153771:web:93d5dabea4ff6345ccb4ee",
    measurementId: "G-X1LXVHDPZF"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut }