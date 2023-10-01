import React from 'react'
import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom'
import { getPost } from '../../helper'

export const loader: LoaderFunction = async ({ params }) => {
    !params.slug && redirect('/')
    const post = getPost(params.slug)
    return { post }
}

const Post: React.FC = () => {
    const { post } = useLoaderData() as any
    console.log('joe')
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post
