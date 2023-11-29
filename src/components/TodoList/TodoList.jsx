// css import 
import './TodoList.css'
import Todo from '../Todo/Todo'
import React,{useContext} from 'react'
import TodoContext from '../../context/TodoContext'


function TodoList(){

  const {todos, dispatch}= useContext(TodoContext)
  function onDeleteTodo(id){
    dispatch({type:'delete_todo', payload:{id}})
  }

  function oneEditTodo(id, newTodo){
    dispatch({type: 'edit_todo', payload:{id, newTodo}})
  }

  function onCompletedTodo(id, state){
    dispatch({type: 'complete_todo', payload: {id, state}})
  }
    return(
          todos && todos.map( (todo)=> (<Todo
            key={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            deleteTodo ={()=> onDeleteTodo(todo.id)}
            editTodo={(newTodo)=> oneEditTodo(todo.id, newTodo)}
            completeTodo={(state)=> onCompletedTodo(todo.id, state)}
           />))
    )
}

export default TodoList;