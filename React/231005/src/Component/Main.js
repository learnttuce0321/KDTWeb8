import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/store";
export default function Main() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo)

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(todoActions.addTodo({todoTitle: text}))
        setText('')
    }
    const onDelete = (e) => {
        dispatch(todoActions.deleteTodo({todoId: e.target.id}))
    }


    return (
        <div>
            <h1>ToDos</h1>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={(e) => {setText(e.target.value)}} />
                <button>Add</button>
            </form>
            <ul>
                {todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <li>{todo.todoTitle}<button id={todo.id} onClick={(e) => {
                                onDelete(e)
                            }}>DELETE</button></li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}