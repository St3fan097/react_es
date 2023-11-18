import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, []);

const language = useContext(LanguageContext)

    return (
        <p className="clock">{language === "en" ? "Current time" : "Orario corrente"} {date.toLocaleTimeString()}</p>
    )
}