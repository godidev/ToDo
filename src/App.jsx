import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const handleSubmit = task => {
    setTasks(prevTasks => [...prevTasks, task])
  }

  return (
    <>
      <header>
        <p>ToDo App</p>
      </header>
      <hr />
      <main>
        <TaskForm onSubmit={handleSubmit} />
        <TaskList tasks={tasks} />
      </main>
    </>
  )
}

export default App
