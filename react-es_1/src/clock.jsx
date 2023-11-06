import { useEffect, useState } from "react";

export function Clock() {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
        // non ho inserito la funzione di pulizia perchè in questo caso non sono in StrictMode
    }, []);

    return (
        <p>Sono le {date.toLocaleTimeString()}</p>
    )
}