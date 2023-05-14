import { useState, useId } from 'react'

export default function TaskForm({ onSubmit }) {
  const [newTask, setNewTask] = useState('')
  const id = useId()

  const handleChange = e => {
    setNewTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ task: newTask, done: false, id: id + newTask })
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
