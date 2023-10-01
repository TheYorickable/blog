import { createBrowserRouter } from 'react-router-dom'
import { loader as postLoader } from './components/PostList/Post'
import { App, Post, PostList } from './components/index'

import ErrorElement from './components/Error'

const Home = () => <h1>aap</h1>

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />,
                errorElement: <App />,
            },
        ],
    },
    {
        path: '/blog',
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <PostList />,
                errorElement: <ErrorElement />,
            },
            { path: '/blog/:slug', element: <Post />, loader: postLoader },
        ],
    },
    {
        path: '/Tools',
        element: <h1>Tools</h1>,
    },
])

export default Router
