import { HelloWorld } from "./hello";

export function App() {
    return (
        <div>
            <HelloWorld />
           {/*  <HelloWorld /> */} 
        </div>
    )
}


/*Si possono utilizzare i componenti più volte poichè sono ideati per essere riutilizzabili.
In alto ho insetito un secondo componente HelloWord che contiene sia la scritta Hello world che a sua volta la renderizzazione del componente nel file bellaGiornata
quindi è possibile riutilizzare anche componenti che hanno altri componenti al suo interno */