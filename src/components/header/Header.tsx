import React, { useEffect, useState } from 'react'

export default function Header() {
    const [date, setDate] = useState(new Date())

    let dateText = `${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    useEffect(() => {
        const updateTime = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(updateTime)
    })

    return (
        <header>
            <h4>Yorick Toma</h4> - {dateText}
        </header>
    )
}
