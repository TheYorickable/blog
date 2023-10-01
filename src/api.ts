import { getDatabase, get, child, ref } from 'firebase/database'
import { app } from './config/firebase'

const db = getDatabase(app)
const dbRef = ref(db)

export const getPost = async (slug?: string) => {
    try {
        const snapshot = await get(child(dbRef, `blog`))
        return snapshot.exists() ? snapshot.val() : null
    } catch (error) {
        console.error(error)
    }
}
