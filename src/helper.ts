import { BlogPost } from './types/Blog'

const toReadableDate = (date: Date, includingTime: boolean = false) => {
    const onlyDates = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
    return includingTime
        ? `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${onlyDates}`
        : onlyDates
}

const postCollection: BlogPost[] = [
    {
        id: 0,
        slug: 'post-one',
        type: 'internal',
        title: 'Custom dotfile sync across mac devices.',
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

const getPosts = () => postCollection
const getPost = (slug: string | undefined) =>
    postCollection.find((post) => post.slug == slug)

export { toReadableDate, getPosts, getPost }
