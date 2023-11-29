import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { useReducer} from 'react'
import TodoContext from './context/TodoContext'
import TodoReducer from './TodoReducer/TodoReducer'

function App() {
  // const [todos, setTodos] = useState([
    
  // ]);
// console.log(todos)

const [todos, dispatch]= useReducer(TodoReducer, [])

  return (
    <>
      <TodoContext.Provider value={{todos, dispatch}}>
        <AddTodo/>
        <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App
