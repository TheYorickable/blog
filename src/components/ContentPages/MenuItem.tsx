import { Title, Link as UILink } from '@theyorickable/ui-lib'
import { Link } from 'react-router-dom'
import styles from './MenuItem.module.css'

export const MenuItem = ({ to, title, icon = '🔗' }: MenuItemInterface) => {
    return (
        <UILink className={styles.menuItem}>
            <Link to={to} title={title}>
                <Title size={1}>
                    <span className={styles.icon}>{icon}</span>
                    {title}
                </Title>
            </Link>
        </UILink>
    )
}

export interface MenuItemInterface {
    to: string
    title: string
    icon: string
}

interface MenuListInterface {
    items: MenuItemInterface[]
}

export const MenuList = ({ items }: MenuListInterface) => {
    return (
        <nav className={styles.navlist}>
            <ul>
                {items.map(({ title, icon, to }, key) => (
                    <li key={key}>
                        <MenuItem to={to} title={title} icon={icon} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}
