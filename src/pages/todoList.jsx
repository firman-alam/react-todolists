import React from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import TodoForm from "../components/todoForm";
import Todos from "../components/todos";

const TodoList = () => {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
};

export default TodoList;
