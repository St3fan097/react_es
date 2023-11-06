import { useEffect, useState } from "react";

export function Clock() {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, []);

    return (
        <p>Sono le {date.toLocaleTimeString()}</p>
    )
}