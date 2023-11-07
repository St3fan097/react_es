import { Clock } from "./clock";
import { Counter } from "./counter";
import { InteractiveWelcome } from "./interactiveWelcome";
import { MouseClicker } from "./mouseClicker";



export function App() {

    return (
        <div>
        <Counter valoreIniziale={0} incremento={1} />  
        <Clock/>
        <InteractiveWelcome/>
        </div>
    )
}
