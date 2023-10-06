import { ReactNode } from 'react'
import { Header, Container, Matrix } from '../'
import './assets/App.css'

const Example = ({
    title,
    children,
}: {
    title?: string
    children: ReactNode
}) => (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
)

function App() {
    return (
        <Container>
            <Example title={'Header'}>
                <Header
                    title="Yorick Toma"
                    time={new Date().toLocaleDateString()}
                >
                    H<span>ello&nbsp;</span>W<span>orld</span>
                </Header>
            </Example>
            <Example title={'Matrix'}>
                <Matrix />
            </Example>
        </Container>
    )
}

export default App
