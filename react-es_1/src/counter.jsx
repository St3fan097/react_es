import { useEffect, useRef, useState } from "react"
import { CounterDisplay } from "./counterDisplay";

export function Counter({ valoreIniziale, incremento }) {
    const [counter, setCounter] = useState(valoreIniziale);

    const direction = useRef()

    function incrementa() {
        setCounter((val) => val + incremento);
        direction.current = "incrementa";
    }
    function decrementa() {
        setCounter((val) => val - incremento);
        direction.current = "decrementa";
    }
    function reset() {
        setCounter(valoreIniziale);
        direction.current = "reset";
    }

    useEffect(() => {
        if (direction.current === "incrementa") {
            console.log("Su")
        } else if (direction.current === "decrementa"){
            console.log("Giù")
        } else if (direction.current === "reset"){
            console.log("Reset")
        } else {
            console.log("Altra casistica")
        }
    })

    return (

        <div>
            <CounterDisplay contatore={counter} />
            <button onClick={incrementa}>Incrementa</button>
            <button onClick={decrementa}>Decrementa</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

