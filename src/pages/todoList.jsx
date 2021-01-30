import React, { useState } from "react";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
import Paper from "../components/paper/paperClass";
import Header from "../components/header/headerClass";
import TodoForm from "../components/todoForm/todoFormClass";
import Todos from "../components/todos/todosClass";

import Container from "../layout/container";

const TodoList = () => {
  // const [todos, setTodos] = useState([
  //   { text: "Learning React!", isCompleted: false },
  //   { text: "Learning React Hooks!", isCompleted: false },
  //   { text: "Learning Styling in React!", isCompleted: false }
  // ]);

  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );
  const [todos, setTodos] = useStateWithLocalStorage("todos");
  const [showAdd, setShowAdd] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("only 10 is allowed!");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
