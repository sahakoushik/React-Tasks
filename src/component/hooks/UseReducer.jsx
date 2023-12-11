import { useReducer } from "react"
import { useState } from "react"
import Todo from "./Todo"
export const ACTION = {
    ADD_TODOS: "add",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete",
    EDIT_TODO: "edit"
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTION.ADD_TODOS:
            return [...todos, newTodo(action.payload.name)]
        case ACTION.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {

                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTION.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id)
        case ACTION.EDIT_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {

                    return { ...todo, name: action.payload.name }
                }
                return todo
            })
        default:
            return todo
    }

}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

export default function Todos() {

    const [name, setName] = useState('')
    const [edit, setEdit] = useState('')
    const [editedTodo, setEditedTodo] = useState('')
    const [todos, dispatch] = useReducer(reducer, [])

    function handelSubmit(e) {
        e.preventDefault()
        if (!edit) {

            dispatch({
                type: ACTION.ADD_TODOS,
                payload: { name: name },
            })
            setName('')
        } else {
            dispatch({
                type: ACTION.EDIT_TODO,
                payload: { ...editedTodo, name: name }
            })
            setEdit(false),
                setName("")
        }
    }

    console.log(todos)

    function handelUpdate(val) {
        setEdit(true)
        const editItem = todos.find((todo) => todo.id === val.id)
        console.log("edit item", editItem)
        setName(editItem.name)
        setEditedTodo(editItem)
    }
    return (

        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </form>

            {
                todos.map(todo => {

                    return <Todo key={todo.id} todo={todo} dispatch={dispatch} handelUpdate={() => handelUpdate(todo)} />
                })
            }

        </div>
    )
}