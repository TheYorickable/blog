import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toReadableDate } from '../../helper'
import styles from './Header.module.css'

const Header = () => {
    const [date, setDate] = useState(new Date())

    const navigate = useNavigate()

    useEffect(() => {
        const updateTime = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(updateTime)
    })

    return (
        <header>
            <div
                className={styles.title}
                onClick={() => {
                    navigate('/')
                }}
            >
                <h3>
                    Y<span>orick</span>T<span>oma</span>
                </h3>
            </div>
            <div className={styles.date}>
                <span>{toReadableDate(date, true)}</span>
            </div>
        </header>
    )
}

export default Header
