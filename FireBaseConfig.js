// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDLffkYAqPHO6cwDk9D2O01lGryMSDvi_Y',
  authDomain: 'expensetracker-58e8c.firebaseapp.com',
  projectId: 'expensetracker-58e8c',
  storageBucket: 'expensetracker-58e8c.firebasestorage.app',
  messagingSenderId: '998872801446',
  appId: '1:998872801446:web:e52776e3b2dc07dbb8d467',
  measurementId: 'G-YN4Z1J3QB3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
