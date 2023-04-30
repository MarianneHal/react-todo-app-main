// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyD-wzIWdZJHX4JRQS5S_hsbRO9JDrzcm54',
    authDomain: 'todo-3445d.firebaseapp.com',
    databaseURL: 'https://todo-3445d-default-rtdb.firebaseio.com',
    projectId: 'todo-3445d',
    storageBucket: 'todo-3445d.appspot.com',
    messagingSenderId: '426074533312',
    appId: '1:426074533312:web:96af7293c8161d04ce2c25',
    measurementId: 'G-64EZ6JW3FW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
export { db }
