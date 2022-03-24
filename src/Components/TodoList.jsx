import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [updateTodo, setUpdateTodo] = useState();

  const addTodos = (todo, update = false) => {
    if (update) {
      editTodo(todo);
      return;
    }
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
    console.log(todo, ...todos);
  };

  console.log(todos);

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isCompelete = !todo.isCompelete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const editTodo = (data) => {
    const index = todos.findIndex((t) => t.id === updateTodo.id);
    if (index === -1) return;
    const allTodos = [...todos];
    console.log({ index, t: allTodos[index], data });
    allTodos[index].text = data.text;
    setTodos(allTodos);
    setUpdateTodo(undefined);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodos} updateTodo={updateTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        setUpdateTodo={setUpdateTodo}
      />

      {/* <dl>
            {
                todos.map( todo => (
                    <li key={todo.id} > {todo.text} </li>
                ))
            }
        </dl> */}
    </div>
  );
}

export default TodoList;
