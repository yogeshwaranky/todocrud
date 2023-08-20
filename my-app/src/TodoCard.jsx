import React from "react";

function TodoCard({ todo, toggleStatus, editTodo, deleteTodo }) {
  return (
    <div className="todo-card">
      <div
        className={`status ${todo.status}`}
        onClick={() => toggleStatus(todo)}
      >
        {todo.status}
      </div>
      <h3>{todo.taskName}</h3>
      <p>{todo.description}</p>
      <button onClick={() => editTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
}

export default TodoCard;
