import { Header } from './index'
import styles from './App.module.css'
import { Outlet } from 'react-router-dom'
import { FC } from 'react'

const App: FC = () => {
    return (
        <main className={styles.app}>
            <Header />
            <section>
                <Outlet />
            </section>
        </main>
    )
}

export default App
