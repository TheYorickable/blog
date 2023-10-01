import './styles/variables.css'
import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getDatabase, ref, child, get } from 'firebase/database'

import { app } from './config/firebase'
import { App, Post, PostList } from './components/index'
import { loader as postLoader } from './components/PostList/Post'

import ErrorElement from './components/Error'

//eslint-disable-next-line

const db = getDatabase(app)

const dbRef = ref(getDatabase(app))

get(child(dbRef, `blog`))
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
