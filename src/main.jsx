import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import ListContainer from './assets/components/TaskList.jsx'
import Task from './assets/components/Task.jsx'
import AddTask from './assets/components/AddTask.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ListContainer /> */}
    <AddTask />
  </StrictMode>,
)
