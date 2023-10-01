import React, { useEffect, useState } from 'react'
import { BlogPost } from '../../types/Blog'
import { toReadableDate, getPosts } from '../../helper'
import { getPost } from '../../api'
import styles from './List.module.css'
import { Link, generatePath } from 'react-router-dom'

const postCollection = getPosts()

const PostList: React.FC = () => {
    const [data, setData] = useState<BlogPost[]>()

    useEffect(() => {
        getPost().then((data) => setData(data))
    }, [])

    return (
        <div className={styles.postlist}>
            {!!data &&
                data.map((post: BlogPost) => {
                    const postRoute = generatePath('/post/:slug', {
                        slug: post.slug,
                    })
                    return (
                        <article
                            className={`${styles.article} ${styles[post.type]}`}
                            key={post.slug}
                        >
                            <h1>
                                <Link to={postRoute} title={post.title}>
                                    {post.title}{' '}
                                    {post.type === 'external' && (
                                        <span className={styles.arrow}>→</span>
                                    )}
                                </Link>
                            </h1>
                            <p>{post.body}</p>
                            <footer>
                                <Link
                                    to={postRoute}
                                    title={'Read more about ' + post.title}
                                >
                                    Read more &raquo;
                                </Link>
                                {!!post.timestamp && (
                                    <span>
                                        {toReadableDate(post.timestamp)}
                                    </span>
                                )}
                            </footer>
                        </article>
                    )
                })}
        </div>
    )
}

export default PostList
