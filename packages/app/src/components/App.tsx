import React from 'react'
import { Header } from './index'
import styles from './App.module.css'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
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
