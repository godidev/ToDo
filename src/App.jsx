import { useState } from 'react'
import './App.css'

function App() {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = () => {}

  return (
    <>
      <header>
        <p>ToDo App</p>
      </header>
      <hr />
      <main>
        <form onSubmit={handleSubmit} className='new-task-form'>
          <input
            type='text'
            name='todo'
            id='todo'
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder='Do laundry, clean bedroom...'
          />
          <button>Add task</button>
        </form>
      </main>
    </>
  )
}

export default App
