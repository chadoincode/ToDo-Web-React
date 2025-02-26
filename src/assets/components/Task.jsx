import { useState } from "react"
import { db } from "../../../firebase.config"

const Task = ({task, onEditTask, onDeleteTask}) => {
  const [isEdit, setIsEdit] = useState(false)
  let taskContent

  if(isEdit){
    taskContent = (
      <>
        <input 
          type="text" 
          value={task.title}
          onChange={(e) => {
            onEditTask({...task, title: e.target.value})
          }}
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    ) 
  } else{
    taskContent = (
      <>
        {task.title}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    )
  }
  return(
    <label>
      <input type="checkbox" 
        checked={todo.isDone}
        onChange={(e) => e.target.checked}
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </label>
  )
}

export default Task