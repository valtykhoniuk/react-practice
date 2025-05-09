import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
       {todos.length === 0 && "No todos"}
      {todos.map((todo) => {
        return (
          //   <TodoItem
          //     id={todo.id}
          //     completed={todo.completed}
          //     title={todo.title}
          //     key={todo.id}
          //   />
          <TodoItem
            {...todo}
            key={todo.id}
            toogleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
