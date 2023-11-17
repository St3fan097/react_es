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
            setNewTodo("")
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
        </>
    )
}