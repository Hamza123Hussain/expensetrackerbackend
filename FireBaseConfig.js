// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAT6WX9DKew88MYqs66P9G5Opj_cBjqfr8',
  authDomain: 'money-maker-7fd5b.firebaseapp.com',
  databaseURL: 'https://money-maker-7fd5b.firebaseio.com',
  projectId: 'money-maker-7fd5b',
  storageBucket: 'money-maker-7fd5b.firebasestorage.app',
  messagingSenderId: '523283306364',
  appId: '1:523283306364:web:41c6621ebe4776862436f9',
  measurementId: 'G-2Q4ZXZGF2C',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
