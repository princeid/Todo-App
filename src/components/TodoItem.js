import React from 'react';

const TodoItem = (props) => {

    const textStyle = {
        textDecoration: "line-through",
        color: "#cdcdcd"
    }
    return (
        <div className="todo-item">
            <input type="checkbox"
            id="" name="todo1"
            checked = {props.value.completed}
            onChange={() => props.handleChange(props.value.id)}
            />
            <label htmlFor="todo1" style={props.value.completed ? textStyle: null}> {/* You can also use tenary operator */}
            {props.value.task}
            </label><br/><br/>
      </div>
    )
}
export default TodoItem