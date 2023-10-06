import styles from './styles.module.css'
import { useRef, useEffect, useState } from 'react'

export const Matrix: React.FC = () => {
    const containerRef = useRef(null)
    const dotSize = 10
    const [totalPixels, setTotalPixels] = useState(0)

    const [letters, setLetters] = useState([])

    const [containerState, setContainerState] = useState({
        width: 350,
        height: 100,
    })

    useEffect(() => {
        setContainerState({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        })

        setTotalPixels(
            ((containerState.width / dotSize) * containerState.height) / dotSize
        )

        // w/e im tired sue me
        setTimeout(() => {
            setLetters([
                [316, 281, 246, 211, 176, 247, 248, 249, 214, 179, 284, 319],
                [321, 286, 251, 216, 181],
            ])
        }, 1500)
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
                    const isLetter = letters.flat().includes(i)
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
