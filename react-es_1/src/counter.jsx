import { useEffect, useRef, useState } from "react"
import { CounterDisplay } from "./counterDisplay";



function useCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue);

    const direction = useRef()

    function incrementa() {
        setCounter((val) => val + 1);
        direction.current = "incrementa";
    }
    function decrementa() {
        setCounter((val) => val - 1);
        direction.current = "decrementa";
    }
    function reset() {
        setCounter(initialValue);
        direction.current = "reset";
    }

    useEffect(() => {
        if (direction.current === "incrementa") {
            console.log("Su")
        } else if (direction.current === "decrementa") {
            console.log("Giù")
        } else if (direction.current === "reset") {
            console.log("Reset")
        } else {
            console.log("Altra casistica")
        }
    }, [counter])

    return {
        counter, 
        initialValue, 
        incrementa: incrementa, 
        decrementa: decrementa,
        reset: reset
    }
}

export function Counter({ initialValue }) {
    const { counter, incrementa, decrementa, reset } = useCounter(initialValue)

    return (

        <div>
            <CounterDisplay contatore={counter} />
            <button onClick={incrementa}>Incrementa</button>
            <button onClick={decrementa}>Decrementa</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

