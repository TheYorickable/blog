import { getDatabase, get, child, ref } from 'firebase/database'
import { BlogPost } from './types/Blog'
import { app } from './config/firebase'

class BlogAPI {
    private dbRef: any
    private useFirebase: boolean
    private postCollection: BlogPost[] = [
        {
            id: 0,
            slug: 'post-one',
            type: 'internal',
            title: 'Custom dotfile sync across devices. update',
            body: 'lorem ipsum enzo',
            timestamp: new Date(
                'Sat Sep 25 2023 01:16:18 GMT+0200 (Central European Summer Time)'
            ),
        },
        {
            id: 1,
            slug: 'post-two',
            type: 'external',
            title: 'https://www.redblobgames.com/making-of/draggable/',
            body: 'Many of my interactive pages have a draggable object. I want the reader to move the object around, and I want the diagram to respond in some way. Here Ill document the code I use to make this work with both mouse and touch input, using browser features that are widely supported since 2020. Heres a common case I want to support:',
            timestamp: new Date(
                'Sat Sep 24 2023 01:16:18 GMT+0200 (Central European Summer Time)'
            ),
        },
    ]

    constructor() {
        if (app.options.apiKey) {
            const db = getDatabase(app)
            this.dbRef = ref(db)
            this.useFirebase = true
        } else {
            this.useFirebase = false
        }
    }

    public async getPosts() {
        if (this.useFirebase) {
            try {
                const snapshot = await get(child(this.dbRef, `blog`))
                return snapshot.exists() ? snapshot.val() : null
            } catch (error) {
                console.error(error)
            }
        } else {
            return this.postCollection
        }
    }
}

export default BlogAPI
