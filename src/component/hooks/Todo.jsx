/* eslint-disable react/prop-types */
import { ACTION } from "./UseReducer"

export default function Todo({ todo, dispatch, handelUpdate }) {
    return (
        <div>
            <span style={{ color: todo.complete ? "#aaa" : "#000" }}>{todo.name}</span>
            <button onClick={() => dispatch({
                type: ACTION.TOGGLE_TODO,
                payload: { id: todo.id }
            })}>
                {todo.complete ? "Undo" : "Complete"}
            </button>
            <button onClick={() => dispatch({
                type: ACTION.DELETE_TODO,
                payload: { id: todo.id }
            })}>
                Delete
            </button>
            <button onClick={handelUpdate}>
                Update
            </button>
        </div>
    )
}