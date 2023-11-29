
function TodoReducer(state, action) {
    if(action.type =='add_todo'){
        let nextId = state.length + 1;
       return setTodos([...state, {id: nextId, text: action.payload.todoText, isComplete: false}]);
    }else if(action.type =='edit_todo'){
        const newTodoList = state.map((todo)=> {
            if(todo.id ==action.payload.id){
              todo.text = action.payload.newTodo;
            }
            return todo;
          });
          setTodos(newTodoList )
    }
    else if(action.type =='delete_todo'){
        const newTodoList = state.filter((todo)=> todo.id !==action.payload.id)
        console.log(newTodoList)
        return newTodoList;
    }
    else if(action.type =='complete_todo'){
        const newTodoList = state.map((todo)=> {
            if(todo.id ==action.payload.id){
              todo.isComplete = action.payload.state;
            }
            return todo;
          });
          setTodos(newTodoList )
    }
  return state;
}

export default TodoReducer