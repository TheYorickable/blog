import styles from './styles.module.css'

export function Container(props: any) {
    const { className = '', ...restProps } = props
    return <div className={`${styles.container} ${className}`} {...restProps} />
}
