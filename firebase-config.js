// firebase-config.js
// Shared Firebase setup — import this in every page

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  query,
  where,
  increment,
  runTransaction
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZBOrq3bAbSPYCunpKggaz6eq6vqJH49s",
  authDomain: "stocksense-2ecf6.firebaseapp.com",
  projectId: "stocksense-2ecf6",
  storageBucket: "stocksense-2ecf6.firebasestorage.app",
  messagingSenderId: "412568855188",
  appId: "1:412568855188:web:ddd58ff20424d195ec8a81"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  query,
  where,
  increment,
  runTransaction
};
