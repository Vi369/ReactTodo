import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { useState } from 'react'
import TodoContext from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([
    
  ]);
// console.log(todos)

  return (
    <>
      <TodoContext.Provider value={{todos, setTodos}}>
        <AddTodo/>
        <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App
