import React from "react";

function Todo(props){
    return (
        <div className="todo-item">
        <input type="checkbox" checked={props.completed}/>
        <p>{props.text}</p>
        </div>
    )
}

export default Todo;