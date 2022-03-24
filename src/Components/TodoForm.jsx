
import React,{useState} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text : input
    })

    setInput('')
  }

  return (
    <form onSubmit={submitHandler} >
      <input type="text"
      placeholder='Add Todos'
      value={input} 
      onChange = {(e) => setInput(e.target.value) }
      />
      <button>Add Todos</button>

    </form>
  )
}

export default TodoForm

















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