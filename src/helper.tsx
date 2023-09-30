const toReadableDate = (date: Date, includingTime: boolean = false) => {
    const onlyDates = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
    return includingTime
        ? `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${onlyDates}`
        : onlyDates
}

export default toReadableDate
