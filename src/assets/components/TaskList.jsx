import { useState, useEffect } from "react"
import Task from "./Task"
import { db } from "../../../firebase.config"

const TaskContainer = ({tasks, changeTask, deleteTask}) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const unsubs = db
      .collection("tasks")
      .onSnapshot(function(querySnapshot){
        setTasks(
          querySnapshot.docs.map((doc) => (
            {...doc.data(), id: doc.id}
          ))
        )
      })
      return () => unsubs()
  }, [])

  return(
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task 
              task={task}
              onEditTask={changeTask}
              onDeleteTask={deleteTask}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskContainer