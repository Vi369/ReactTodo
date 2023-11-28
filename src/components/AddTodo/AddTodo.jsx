import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext';

function AddTodo() {
  const {todos, setTodos}= useContext(TodoContext);
  const [todoText, setTodoText] = useState('');
  return (
    <>
        <input 
            type="text"
            placeholder='Write todo here'
            onChange={(e)=> setTodoText(e.target.value)}
            value={todoText}
        />
        {/* {console.log(todoText)} */}
        <button onClick={ ()=>{
          // console.log("clicked")
          let nextId = todos.length + 1;
          setTodos([...todos, {id: nextId, text: todoText, isComplete: false}]);
          setTodoText('');
        }}>
          Add
        </button>
    </>
  )
}

export default AddTodo