// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjd85M3JZcxHb94sZfwNwgKMAtbhK_A30",
    authDomain: "dijonbarnight.firebaseapp.com",
    projectId: "dijonbarnight",
    storageBucket: "dijonbarnight.appspot.com",
    messagingSenderId: "345876512194",
    appId: "1:345876512194:web:a368d316d3d4e55980ea5b",
    measurementId: "G-RP3BMNHTYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, getFirestore, collection, addDoc, getDocs };