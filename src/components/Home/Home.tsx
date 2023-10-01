import { Container } from '@theyorickable/ui-lib'
import { MenuList } from '../ContentPages/MenuItem'
import { MenuItemInterface } from './../ContentPages/MenuItem'

const NavigationLinks: MenuItemInterface[] = [
    {
        title: 'Blog',
        icon: '💭',
        to: '/blog',
    },
    {
        title: 'Links',
        icon: '📸',
        to: '/links',
    },
    {
        title: 'Github',
        icon: '🚀',
        to: 'https://github.com/theyorickable',
    },
    {
        title: 'Instagram',
        icon: '📸',
        to: 'https://instagram.com/theyorickable',
    },
    {
        title: 'LinkedIn',
        icon: '👨‍💻',
        to: 'https://linkedin.com/yoricktoma',
    },
]

const Home = () => (
    <Container>
        <MenuList items={NavigationLinks} />
    </Container>
)

export default Home
