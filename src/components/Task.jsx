export default function Task({ task, id, active, handleCheckbox, deleteTask }) {
  return (
    <li>
      <input
        type='checkbox'
        checked={active}
        onChange={() => handleCheckbox(id)}
      />
      {task}
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  )
}
