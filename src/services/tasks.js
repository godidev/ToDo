const getLocalStorage = () => {
  const res = window.localStorage.getItem('tasks')
  return res ? JSON.parse(res) : []
}

const deleteTask = id => {
  const tasks = getLocalStorage()
  const updatedList = tasks.filter(task => task.id !== id)
  return updatedList
}

const deleteSelected = () => {
  const tasks = getLocalStorage()
  const updatedList = tasks.filter(task => !task.done)
  return updatedList
}

export { getLocalStorage, deleteTask, deleteSelected }
