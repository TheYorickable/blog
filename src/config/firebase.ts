import { initializeApp } from 'firebase/app'

const vite_env = import.meta.env

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: vite_env.VITE_FIREBASE_API_KEY,
    authDomain: vite_env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: vite_env.VITE_FIREBASE_DATABASE_URL,
    projectId: vite_env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: vite_env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: vite_env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: vite_env.VITE_FIREBASE_APP_ID,
    measurementId: vite_env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export { app }
