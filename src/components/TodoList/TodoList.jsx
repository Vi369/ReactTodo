// css import 
import './TodoList.css'
import Todo from '../Todo/Todo'
import React from 'react'

function TodoList({todos, setTodos}){
  function onDeleteTodo(id){
    const newTodoList = todos.filter((todo)=> todo.id !==id)
    console.log(newTodoList)
    setTodos(newTodoList);
  }
    return(
          todos && todos.map( (todo)=> (<Todo
            key={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            deleteTodo ={()=> onDeleteTodo(todo.id)}
           />))
    )
}

export default TodoList;