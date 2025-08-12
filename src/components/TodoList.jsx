import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}
