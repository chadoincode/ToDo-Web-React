import { useState } from "react"

const Todo = ({todo, onEditTodo, onDeleteTodo}) => {
  const [isEdit, setIsEdit] = useState(false)
  let todoContent

  if(isEdit){
    todoContent = (
      <>
        <input 
          type="text" 
          value={todo.title}
          onChange={(e) => {
            onEditTodo({...todo, title: e.target.value})
          }}
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    ) 
  } else{
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    )
  }
  
  return(
    <label>
      {todoContent}
      <button onClick={() => onDeleteTodo}>Delete</button>
    </label>
  )
}

export default Todo