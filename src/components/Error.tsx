import { FC } from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorElement: FC = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <>
            <h3>Oh no!</h3>
            <p>
                Something went wrong, <Link to="/">click here</Link> to go back
                home!
            </p>
        </>
    )
}

export default ErrorElement
