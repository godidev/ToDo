import { useState, useId } from 'react'

export default function TaskForm({ onSubmit }) {
  const [newTask, setNewTask] = useState('')
  const [alert, setAlert] = useState()
  const id = useId()

  const handleChange = e => {
    setNewTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (newTask) {
      onSubmit({ task: newTask, done: false, id: id + newTask })
      setNewTask('')
    } else {
      setAlert("You can't add an empty task")
      setTimeout(() => setAlert(null), 5000)
    }
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
      {alert && <p className='alert-msg'>{alert}</p>}
      <button>Add task</button>
    </form>
  )
}
