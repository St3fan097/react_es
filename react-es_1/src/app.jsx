
import { TodoList } from "./TodoList";
import { Clock } from "./clock";
import { Counter } from "./counter";
import { Welcome } from "./welcome";




export function App() {

    return (
        <div>
            <Welcome/>
            <Counter valoreIniziale={0} incremento={1} />
            <Clock />
           <TodoList/>
        </div>
    )
}
