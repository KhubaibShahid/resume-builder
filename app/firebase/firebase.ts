import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc, collection, addDoc, updateDoc, getDocs, query, where, getDoc, arrayRemove, arrayUnion } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB_vMcNy3r2Szs3Yd24yiGlSxp20MTlPLs",
  authDomain: "resume-builder-34aee.firebaseapp.com",
  projectId: "resume-builder-34aee",
  storageBucket: "resume-builder-34aee.firebasestorage.app",
  messagingSenderId: "278040590299",
  appId: "1:278040590299:web:4932820c863e2d0f9099fe",
  measurementId: "G-LEB22FDJPF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getDocs, query, where, getDoc, onAuthStateChanged, updateDoc, setDoc, doc, db, collection, addDoc, arrayRemove, arrayUnion }