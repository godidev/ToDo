import { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { deleteTask, getLocalStorage } from './services/tasks'

function App() {
  const [tasks, setTasks] = useState(() => getLocalStorage())

  const deleteOneTask = id => {
    const updatedTasks = deleteTask(id)
    setTasks(updatedTasks)
  }

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

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
        {tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            handleCheckbox={handleCheckbox}
            deleteTask={deleteOneTask}
          />
        )}
      </main>
    </>
  )
}

export default App
