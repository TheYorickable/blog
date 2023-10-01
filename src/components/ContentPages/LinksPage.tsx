import { Container } from '@theyorickable/ui-lib'
import React from 'react'
import { MenuItemInterface, MenuList } from './MenuItem'

const quickLinks: MenuItemInterface[] = [
    {
        title: 'ycombinator news',
        icon: '📰',
        to: 'https://news.ycombinator.com',
    },
]

const LinksPage: React.FC = () => {
    return (
        <Container>
            <MenuList items={quickLinks} />
        </Container>
    )
}

export default LinksPage
