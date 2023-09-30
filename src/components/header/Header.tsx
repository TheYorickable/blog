import { useEffect, useState } from 'react'
import toReadableDate from '../../helper'
import styles from './Header.module.css'

const Header = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const updateTime = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(updateTime)
    })

    return (
        <header>
            <div className={styles.title}>
                <h4>Yorick Toma</h4>
            </div>
            <div className={styles.date}>
                <span>{toReadableDate(date, true)}</span>
            </div>
        </header>
    )
}

export default Header
