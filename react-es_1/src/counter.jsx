import { useEffect, useState } from "react"
import { CounterDisplay } from "./counterDisplay";

export function Counter({ valoreIniziale, incremento }) {
    const [counter, setCounter] = useState(valoreIniziale);

    function incrementa() {
        setCounter((val) => val + incremento);
    }
    function decrementa() {
        setCounter((val) => val - incremento);
    }
    function reset() {
        setCounter((val) => val = valoreIniziale);
    }

    useEffect(() => {
        console.log(counter);
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

