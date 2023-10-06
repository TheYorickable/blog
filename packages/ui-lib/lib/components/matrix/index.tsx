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
        const w = containerRef.current.offsetWidth
        const h = containerRef.current.offsetHeight

        setContainerState({
            width: w,
            height: h,
        })

        setTotalPixels(
            ((containerState.width / dotSize) * containerState.height) / dotSize
        )
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
