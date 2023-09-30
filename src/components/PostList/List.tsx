import { BlogPost } from '../../types/Blog'
import toReadableDate from '../../helper'
import styles from './List.module.css'
type Props = {
    posts: BlogPost[]
}

const PostList = (props: Props) => (
    <div className={styles.postlist}>
        {props.posts.map((post: BlogPost) => (
            <article
                className={`${styles.article} ${styles[post.type]}`}
                key={post.id}
            >
                <h1>
                    <a href={post.slug} title={post.title}>
                        {post.title}{' '}
                        {post.type === 'external' && (
                            <span className={styles.arrow}>→</span>
                        )}
                    </a>
                </h1>
                <p>{post.body}</p>
                <footer>
                    <a href={post.slug} title={'Read more about ' + post.title}>
                        Read more &raquo;
                    </a>
                    <span>{toReadableDate(post.timestamp)}</span>
                </footer>
            </article>
        ))}
    </div>
)

export default PostList
