import styles from './styles.module.css'

interface TitleProps {
    size?: number
    children?: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({
    size = 1,
    children,
    ...restProps
}) => {
    if (size < 1 || size > 6) {
        size = 1
    }

    const Tag = `h${size}` as keyof JSX.IntrinsicElements

    return (
        <Tag {...restProps} className={styles.title}>
            {children}
        </Tag>
    )
}
