import styles from './styles.module.css'
import { useRef, useEffect, useState } from 'react'

export const Matrix: React.FC = () => {
    const containerRef = useRef(null)
    const dotSize = 10
    const [totalPixels, setTotalPixels] = useState(0)

    const [containerState, setContainerState] = useState({
        width: 100,
        height: 100,
    })

    useEffect(() => {
        const w = Math.floor(containerRef.current.offsetWidth / 10) * 10
        const h = Math.floor(containerRef.current.offsetHeight / 10) * 10

        console.log()
        setContainerState({
            width: w,
            height: h,
        })

        console.log(w / dotSize)

        setTotalPixels(((w / dotSize) * h) / dotSize)
    }, [])

    return (
        <div
            onClick={() => {
                setTotalPixels(
                    ((containerState.width / dotSize) * containerState.height) /
                        dotSize
                )
                console.log(totalPixels)
            }}
            ref={containerRef}
            className={styles.gridContainer}
        >
            <div className={styles.matrix}>
                {Array.from({ length: totalPixels }, (_, i) => {
                    const isLetter = false
                    const realDotStyle = {
                        backgroundColor: isLetter ? 'white' : 'black',
                        transition: 'background-color 2s ease',
                    }

                    return (
                        <div
                            style={{
                                width: `${dotSize}px`,
                                height: `${dotSize}px`,
                            }}
                            matrixId={i}
                            key={i}
                            className={styles.matrixdot}
                        >
                            <span
                                className={styles.realDot}
                                style={realDotStyle}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
