import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App, Post, PostList } from './components/index'
import { loader as postLoader } from './components/PostList/Post'
import './styles/index.css'
import './styles/variables.css'

import ErrorElement from './components/Error'

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
