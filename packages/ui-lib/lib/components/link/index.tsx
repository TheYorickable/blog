import styles from './styles.module.css'

export function Link(props: any) {
    const { className = '', ...restProps } = props

    return <div className={`${styles.link} ${className}`} {...restProps} />
}
