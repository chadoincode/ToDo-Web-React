import { useState } from "react"

const AddTask = ({onAddTask}) => {
  const [newTask, setNewTask] = useState('')

  return(
    <>
      <input type="text" 
        placeholder="Add new task..."
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={onAddTask}>Add</button>
    </>
  )
}

export default AddTask