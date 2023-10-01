import { Container, Link as UILink } from '@theyorickable/ui-lib'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const MenuItem = ({
    to,
    title,
    icon = '🔗',
}: {
    to: string
    title: string
    icon: string
}) => (
    <UILink className={styles.menuItem}>
        <Link to={to} title={title}>
            <span className={styles.icon}>{icon}</span>
            {title}
        </Link>
    </UILink>
)

const Home = () => (
    <Container>
        <nav className={styles.navlist}>
            <MenuItem to="/blog" title="Blog" icon="💭" />
            <MenuItem to="/other-page" title="Other" icon="🤷‍♂️" />
            <MenuItem to="/tooling" title="Tooling" icon="🛠️" />
        </nav>
    </Container>
)

export const OtherPage = () => <h1>Other page</h1>

export default Home
