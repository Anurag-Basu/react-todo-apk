import React, { useState, useEffect } from "react";

function TodoForm({ onSubmit, updateTodo }) {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit(
      {
        id: Math.floor(Math.random() * 1000),
        text: input,
      },
      !!updateTodo
    );

    setInput("");
  };

  useEffect(() => {
    if (!updateTodo) return;
    setInput(updateTodo.text);
  }, [updateTodo]);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add Todos"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>{updateTodo ? "Update" : "Add Todos"}</button>
    </form>
  );
}

export default TodoForm;

// import React, { Component } from 'react'

// class TodoForm extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//        todo : ''
//     }
//   }

//   inputHandler = (e) => {
//     this.setState({
//       todo: e.target.value
//     })
//   }

//   addTodoHandler = (e) => {
//     e.preventDefault();

//   }

//   render() {
//     const {todo} = this.state;
//     return (
//       <form onSubmit={this.addTodoHandler} >
//         <input type="text"
//           placeholder='Add a todo'
//           required
//           value = {todo}
//           className = 'todo-input'
//           onChange={this.inputHandler}
//         />
//         <button type="submit"> Add Todo </button>
//       </form>
//     )
//   }
// }

// export default TodoForm
