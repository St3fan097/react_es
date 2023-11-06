import { Clock } from "./clock";
import { Counter } from "./counter";
import { MouseClicker } from "./mouseClicker";



export function App() {

    return (
        <div>
        <Counter valoreIniziale={0} incremento={1} />  
        <Clock/>
        <MouseClicker name="uno"/>
        </div>
    )
}
