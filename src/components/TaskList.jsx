import Task from './Task'

export default function TaskList({ tasks, handleCheckbox }) {
  return (
    <section>
      <ul className='task-list'>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task.task}
            active={task.done}
            id={task.id}
            handleCheckbox={handleCheckbox}
          />
        ))}
      </ul>
    </section>
  )
}
