import { useState } from "react"

export function Counter ({valoreIniziale, incremento}){
const[counter, setCounter]= useState(valoreIniziale);

function incrementa(){
    setCounter((val) => val + incremento);
}

    return(

        <div>
            <h2>Conteggio {counter}</h2>
            <button onClick={incrementa}>Incrementa</button>
        </div>
    )
}

/* è meglio passare come parametro una funzione per ottimizzare il codice,
in caso di più chiamate garantisce che il valore corrente dello stato sia utilizzato per calcolare quello nuovo */