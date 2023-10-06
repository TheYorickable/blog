import styles from './styles.module.css'
import { useRef, useEffect, useState } from 'react'

export const Matrix: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(document.createElement('div'))
    const [totalPixels, setTotalPixels] = useState(0)

    useEffect(() => {
        const calc =
            (containerRef.current.offsetWidth *
                containerRef.current.offsetHeight) /
            128
        setTotalPixels(calc)

        console.log(calc)
    }, [])

    return (
        <div
            ref={containerRef}
            onClick={() => {
                console.log('joe')
                const calc =
                    containerRef.current.offsetWidth *
                    containerRef.current.offsetHeight
                setTotalPixels(calc)
            }}
            className={styles.gridContainer}
        >
            <div className={styles.matrix}>
                {Array.from({ length: totalPixels }, (_, i) => {
                    return <div key={i} className={styles.matrixdot} />
                })}
            </div>
        </div>
    )
}
