import { useState } from "react"

export function TodoList() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('');

    const changeValue = (e) => {
        setNewTodo(e.target.value);
    };

    const generaToDo = () => {
        if (newTodo !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("")   //fatto nell'esercizio precedente
        }
    }
    function azzeraToDo() {
        if (todos.length > 0) {
            setTodos([])
        }
    }


    return (
        <>
            <input type="text" value={newTodo} onChange={changeValue} />
            <button onClick={generaToDo}>TodoList</button>
            <ul> {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
            </ul>
            <button onClick={azzeraToDo}>Azzera</button>
        </>
    )
}