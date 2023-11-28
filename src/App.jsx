import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {id:1, text: "haa bhaiya", isCompleted: true},
    {id:2, text: "Hnnji", isCompleted: false},
  ]);

  function addTodos(todoText){
    console.log("called");
    let nextId = todos.length+1;
    setTodos([...todos, {id:nextId, isCompleted: false, text: todoText}])
    // console.log(todoText);
  }
  return (
    <>
      <AddTodo addTodos={addTodos} />
      <TodoList todos={todos} setTodos = {setTodos}/>
    </>
  )
}

export default App
