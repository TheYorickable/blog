import 'vite/client'
declare module '*.scss'

declare module '*.module.css' {
    const content: Record<string, string>
    export default content
}
