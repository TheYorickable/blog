import './styles/variables.css'
import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getDatabase, ref, child, get, set } from 'firebase/database'
import { App, Post, PostList } from './components/index'
import { loader as postLoader } from './components/PostList/Post'

import ErrorElement from './components/Error'

//eslint-disable-next-line
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

const db = getDatabase(app)

const dbRef = ref(getDatabase(app))

set(ref(db, 'blog/2'), {
    slug: 'post-two',
    type: 'external updaaaaaaaaate',
    title: 'https://www.redblobgames.com/making-of/draggable/',
    body: 'Many of my interactive pages have a draggable object. I want the reader to move the object around, and I want the diagram to respond in some way. Here Ill document the code I use to make this work with both mouse and touch input, using browser features that are widely supported since 2020. Heres a common case I want to support:',
    timestamp: new Date(
        'Sat Sep 24 2023 01:16:18 GMT+0200 (Central European Summer Time)'
    ),
})

get(child(dbRef, `blog/2`))
    .then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
        } else {
            console.log('No data available')
        }
    })
    .catch((error) => {
        console.error(error)
    })

// const analytics = getAnalytics(app)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement />,

        children: [
            {
                index: true,
                element: <PostList />,
                errorElement: <App />,
            },
            { path: '/post/:slug', element: <Post />, loader: postLoader },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
