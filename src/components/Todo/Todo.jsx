import React, { useState } from "react";
function Todo({completeTodo,editTodo,deleteTodo,text, isCompleted}){

    const [isEditing, setIsEditing]= useState(false)
    const [todoText, setTodoText] = useState(text)

    return(
        <>
            <div>
                <input type='checkbox' checked={isCompleted} onClick={()=> completeTodo(!isCompleted)}/>
                {isEditing? <input 
                value={todoText}
                onChange={(e)=> setTodoText(e.target.value)}
                />: <span>{text}</span>}
                <button onClick={()=>{setIsEditing(!isEditing);
                editTodo(todoText)}}>{isEditing? 'Save': 'Edit'}</button>
                <button 
                onClick={deleteTodo}
                >Delete</button>
            </div>
        </>
    )
}

export default Todo;