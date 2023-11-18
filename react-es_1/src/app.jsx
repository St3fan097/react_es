
import { Container } from "./Container";
import { TodoList } from "./TodoList";
import { Clock } from "./clock";
import { Counter } from "./counter";
import { Welcome } from "./welcome";




export function App() {

    return (
        <Container title={<h1 style={{margin: 0}}>Pagina con dettagli</h1>}>
            <Welcome/>
            <Counter valoreIniziale={0} incremento={1} />
            <Clock />
           <TodoList/>
        </Container>
    )
}
