import React from "react";
function Todo({deleteTodo,text, isCompleted}){

    return(
        <>
            <div>
                <input type='checkbox' checked={isCompleted}/>
                <span>{text}</span>
                <button>Edit</button>
                <button 
                onClick={deleteTodo}
                >Delete</button>
            </div>
        </>
    )
}

export default Todo;