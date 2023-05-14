import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const handleSubmit = task => {
    setTasks(prevTasks => [...prevTasks, task])
  }

  const handleCheckbox = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : { ...task }
    )
    setTasks(updatedTasks)
  }

  return (
    <>
      <header>
        <p>ToDo App</p>
      </header>
      <hr />
      <main>
        <TaskForm onSubmit={handleSubmit} />
        <TaskList tasks={tasks} handleCheckbox={handleCheckbox} />
      </main>
    </>
  )
}

export default App
