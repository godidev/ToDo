export default function Task({ task, id, active, handleCheckbox }) {
  return (
    <li>
      <input
        type='checkbox'
        checked={active}
        onChange={() => handleCheckbox(id)}
      />
      {task}
    </li>
  )
}
