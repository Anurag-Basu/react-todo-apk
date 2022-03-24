import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
 
    const [todos, setTodos] = useState([])

    const addTodos = (todo) => {
        const newTodo = [todo, ...todos];

        setTodos(newTodo)
        console.log(todo, ...todos)
    }

    console.log(todos)

    const completeTodo = (id) => {
        let updatedTodos = todos.map( todo => {
            if(todo.id == id){
                todo.isCompelete = !todo.isCompelete;
            }
            return todo
        });
        setTodos(updatedTodos)
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr)

    }

  return (
    <div>
        <h1>Todo App</h1>
        <TodoForm onSubmit = {addTodos}  />
        <Todo todos = {todos} completeTodo = {completeTodo} removeTodo={removeTodo} />


        {/* <dl>
            {
                todos.map( todo => (
                    <li key={todo.id} > {todo.text} </li>
                ))
            }
        </dl> */}

      
    </div>
  )
}

export default TodoList