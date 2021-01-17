import React from "react";
import "./styles.css";

import Paper from "./components/paper";
import Header from "./components/header";
import TodoForm from "./components/todoForm";
import Todos from "./components/todos";

export default function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
}
