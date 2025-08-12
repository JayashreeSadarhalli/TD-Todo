import React, { useState } from "react";
import { TextField, Button, Stack, Paper, Typography, Box } from "@mui/material";
import TodoList from "../components/TodoList";
import Layout from "../components/Layout";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            width: "100%",
            maxWidth: 500,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            My Todo List
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <TextField
              label="New Todo"
              variant="outlined"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              fullWidth
            />
            <Button variant="contained" onClick={addTodo}>
              Add
            </Button>
          </Stack>

          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </Paper>
      </Box>
    </Layout>
  );
}
