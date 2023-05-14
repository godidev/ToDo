import { useState } from 'react'

export default function TaskForm({ onSubmit }) {
  const [newTask, setNewTask] = useState('')

  const handleChange = e => {
    setNewTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(newTask)
    setNewTask('')
  }

  return (
    <form onSubmit={newTask => handleSubmit(newTask)} className='new-task-form'>
      <input
        type='text'
        name='todo'
        id='todo'
        value={newTask}
        onChange={handleChange}
        placeholder='Do laundry, clean bedroom...'
      />
      <button>Add task</button>
    </form>
  )
}
