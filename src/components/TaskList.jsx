export default function TaskList({ tasks }) {
  return (
    <section>
      <ul className='task-list'>
        {tasks.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </section>
  )
}
