import { FocusableInput } from "./FocusableInput";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Clock } from "./clock";
import { Counter } from "./counter";




export function App() {

    return (
        <div>
        <Counter valoreIniziale={0} incremento={1} />  
        <Clock/>
        <UncontrolledLogin/>
        <FocusableInput/>
        </div>
    )
}
