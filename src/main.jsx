import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoApp from './assets/components/TodoApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
