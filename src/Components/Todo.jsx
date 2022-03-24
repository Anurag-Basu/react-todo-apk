import React, {useState} from 'react'
import TodoList from './TodoList'
import {BiEditAlt} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'

function Todo({todos, completeTodo, removeTodo}) {

    const [edit, setEdit] = useState({
        id : null,
        value: ''
    })


  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key = {index} >

        <div key={todo.id} onClick = {() => completeTodo(todo.id)} >
            {todo.text}
        </div>
        <div className='icons' >
            <AiFillCloseCircle  
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
            />
            <BiEditAlt
            onClick={() => setEdit({id: todo.id, value: todo.text })}
            />
        </div>

    </div>
  ))
}

export default Todo