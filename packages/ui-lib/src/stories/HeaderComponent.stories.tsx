import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '../../'

const meta = {
    title: 'Custom Components/Header',
    component: (props) => (
        <Header {...props}>
            J<span>ane</span>D<span>oe</span>
        </Header>
    ),
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderComponent: Story = {
    args: {
        title: 'Jane Doe',
        time: 'Now',
    },
}
