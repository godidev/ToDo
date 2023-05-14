import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

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
        <section>
          {tasks.map(task => (
            <p key={task}>{task}</p>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
