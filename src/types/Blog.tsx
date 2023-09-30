export interface BlogPost {
    id: number
    slug: string
    type: 'internal' | 'external'
    title: string
    body: string
    timestamp: Date
}
