import { useState } from "react"

import classes from "./TodoList.module.scss"

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
    function azzeraToDo() {
        if (todos.length > 0) {
            setTodos([])
        }
    }

    const azzeraSingleToDo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    return (
        <>
            <input type="text" value={newTodo} onChange={changeValue} />
            <button onClick={generaToDo}>TodoList</button>
            <ul className={classes.ul}> {todos.map((todo, index) => (
                <li key={index}>{index}{todo}<button onClick={azzeraSingleToDo}>Azzera</button></li>
            ))}
            </ul>
            <button onClick={azzeraToDo}>Azzera</button>
        </>
    )
}