import { BlogPost } from '../../types/Blog'
import { toReadableDate, getPosts } from '../../helper'
import styles from './List.module.css'
import { Link, generatePath } from 'react-router-dom'
import React from 'react'

const postCollection = getPosts()

const PostList: React.FC = () => (
    <div className={styles.postlist}>
        {postCollection.map((post: BlogPost) => {
            const postRoute = generatePath('/post/:slug', {
                slug: post.slug,
            })
            return (
                <article
                    className={`${styles.article} ${styles[post.type]}`}
                    key={post.id}
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
                        <span>{toReadableDate(post.timestamp)}</span>
                    </footer>
                </article>
            )
        })}
    </div>
)

export default PostList
