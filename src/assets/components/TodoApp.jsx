import { useState, useEffect, useMemo } from "react"
import { db } from "../../../firebase.config"
import { collection, deleteDoc, doc, getDocs, updateDoc, addDoc } from "firebase/firestore"
import AddTodo from "./AddTodo"
import TodoContainer from "./TodoList"

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const todosRef = useMemo(() => collection(db, "todos"), []) 

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await getDocs(todosRef)
        const filtered = data.docs.map((doc) => (
          {...doc.data(), id: doc.id}
        ))
        setTodos(filtered)
      } catch (err) {
        console.error(err)
      }
    }
    getTodos()
  }, [])

  const handleAddTodo = async (title) => {
    if(title !== ""){
      await addDoc(todosRef, {title: title})
    }
  }

  const handleChangeTodo = async(todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), {title: title})
  }

  const handleDeleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id))
  }
  return(
    <>
      <AddTodo 
        onAddTodo={handleAddTodo}
      />
      <div>
        <TodoContainer 
          todos={todos}
          changeTodo={handleChangeTodo}
          deleteTodo={handleDeleteTodo}
        />
      </div>
    </>
  )
}

export default TodoApp