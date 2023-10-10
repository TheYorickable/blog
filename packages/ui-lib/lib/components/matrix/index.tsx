import styles from './styles.module.css'
import { useRef, useEffect, useState } from 'react'

export const Matrix: React.FC = () => {
    const containerRef = useRef(null)
    const dotSize = 20
    const [totalPixels, setTotalPixels] = useState(0)

    const [containerState, setContainerState] = useState({
        width: 200,
        height: 200,
    })

    useEffect(() => {
        const w = Math.floor(containerRef.current.offsetWidth / 10) * 10
        const h = Math.floor(containerRef.current.offsetHeight / 10) * 10

        setContainerState({
            width: w,
            height: h,
        })

        setTotalPixels(((w / dotSize) * h) / dotSize)

        const interval = setInterval(() => {
            console.log(totalPixels)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            onClick={() => {
                setTotalPixels(
                    ((containerState.width / dotSize) * containerState.height) /
                        dotSize
                )
            }}
            ref={containerRef}
            className={styles.gridContainer}
        >
            <div className={styles.matrix}>
                {Array.from({ length: totalPixels }, (_, i) => {
                    const randomNr = Math.floor(Math.random() * 10)
                    const dotClass =
                        parseInt(i.toString()[0]) === randomNr
                            ? 'white'
                            : 'black'

                    return (
                        <div
                            style={{
                                width: `${dotSize}px`,
                                height: `${dotSize}px`,
                            }}
                            matrixId={i}
                            key={i}
                            className={`${styles.matrixdot} ${styles[dotClass]}`}
                        >
                            <span className={styles.realDot} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
