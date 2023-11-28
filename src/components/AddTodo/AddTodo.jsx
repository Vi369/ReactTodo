import React, { useState } from 'react'

function AddTodo({addTodos}) {
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
          addTodos(todoText)
          setTodoText('');
        }}>
          Add
        </button>
    </>
  )
}

export default AddTodo