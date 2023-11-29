import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext';

function AddTodo() {
  const {dispatch}= useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

function addTodo(todoText){
  dispatch({type: 'add_todo', payload: {todoText}})
}
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
          addTodo(todoText)
          setTodoText('');
        }}>
          Add
        </button>
    </>
  )
}

export default AddTodo