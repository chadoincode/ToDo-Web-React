import { useState } from "react"
import { db } from "../../../firebase.config"
import { collection, addDoc } from "firebase/firestore"
import AddTask from "./assets/components/AddTask"
import TaskContainer from "./assets/components/TaskList"


const TodoApp = () => {
  const [tasks, setTasks] = useState([])

  const handleAddTask = async (e) => {
    e.preventDefault()
    if(newTask !== ""){
      await addDoc(collection(db, "tasks"), {
        newTask,
        isDone: false
      })
      setNewTask('')
    }
  }

  const handleChangeTask = () => {

  }

  const handleDeleteTask = (todoId) => {
    if(todoId !== )
  }
  return(
    <>
      <AddTask />
      <TaskContainer 
        tasks={tasks}
        changeTask={}
      />
    </>
  )
}