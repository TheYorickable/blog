import { Header } from './index'
import { BlogPost } from '../types/Blog'
import './App.css'

function App() {
    const post: BlogPost = {
        id: 0,
        title: 'Custom dotfile sync across mac devices.',
        body: 'lorem ipsum enzo',
        timestamp: new Date('2023-09-29 23:00:00 GMT+1'),
    }

    return (
        <main>
            <Header />
            <section>
                <h2>Blog posts</h2>
                <article>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <span>{post.timestamp.toISOString()}</span>
                </article>
            </section>
        </main>
    )
}

export default App
