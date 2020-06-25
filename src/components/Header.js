import React, { useContext } from 'react'
import { TasksContext } from '../contexts/TasksContext'

const Header = () => {

  const { tasks } = useContext(TasksContext)

  return(
    <header className="header">
      <h1>Tasks List</h1>
      <h2>You have {tasks.length} tasks to accomplish!</h2>
    </header>
  )

}

export default Header