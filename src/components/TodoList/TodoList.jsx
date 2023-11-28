// css import 
import './TodoList.css'
import Todo from '../Todo/Todo'
import React,{useContext} from 'react'
import TodoContext from '../../context/TodoContext'


function TodoList(){

  const {todos, setTodos}= useContext(TodoContext)
  function onDeleteTodo(id){
    const newTodoList = todos.filter((todo)=> todo.id !==id)
    console.log(newTodoList)
    setTodos(newTodoList);
  }

  function oneEditTodo(id, newTodo){
    const newTodoList = todos.map((todo)=> {
      if(todo.id ==id){
        todo.text = newTodo;
      }
      return todo;
    });
    setTodos(newTodoList )
  }

  function onCompletedTodo(id, state){
    const newTodoList = todos.map((todo)=> {
      if(todo.id ==id){
        todo.isCompleted = state;
      }
      return todo;
    });
    setTodos(newTodoList )
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