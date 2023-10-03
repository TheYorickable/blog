import { Header as UIHeader } from '@theyorickable/ui-lib'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toReadableDate } from '../../helper'

const Header: React.FC = () => {
    const [date, setDate] = useState(new Date())

    const navigate = useNavigate()

    useEffect(() => {
        const updateTime = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(updateTime)
    })

    return (
        <UIHeader
            navigate={navigate}
            title="Yorick Toma"
            time={toReadableDate(date, true)}
        >
            Y<span>orick&nbsp;</span>T<span>oma</span>
        </UIHeader>
    )
}

export default Header
