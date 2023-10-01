import { createBrowserRouter } from 'react-router-dom'
import { loader as postLoader } from './components/PostList/Post'
import { App, Home, OtherPage, Post, PostList } from './components/index'

import ErrorElement from './components/Error'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />,
                errorElement: <ErrorElement />,
            },
            {
                path: '/other-page',
                element: <OtherPage />,
                errorElement: <ErrorElement />,
            },
            {
                path: '/tooling',
                element: <h1>Tooling</h1>,
                errorElement: <ErrorElement />,
            },
            {
                path: '/blog',
                errorElement: <ErrorElement />,
                children: [
                    {
                        index: true,
                        element: <PostList />,
                        errorElement: <ErrorElement />,
                    },
                    {
                        path: ':slug',
                        element: <Post />,
                        loader: postLoader,
                    },
                ],
            },
        ],
    },
])

export default Router
