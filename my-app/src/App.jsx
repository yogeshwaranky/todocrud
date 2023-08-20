import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleStatus = (todo) => {
    const updatedTodos = todos.map((t) =>
      t === todo
        ? { ...t, status: t.status === "completed" ? "notCompleted" : "completed" }
        : t
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todo) => {
    const newTaskName = prompt("Enter new task name:", todo.taskName);
    if (newTaskName !== null) {
      const updatedTodos = todos.map((t) =>
        t === todo ? { ...t, taskName: newTaskName } : t
      );
      setTodos(updatedTodos);
    }
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter((t) => t !== todo);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            toggleStatus={toggleStatus}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
