import React, { useContext } from 'react'
import { TasksContext } from '../contexts/TasksContext'
import Task from './Task'

const TasksList = () => {

  const { tasks } = useContext(TasksContext)

  return tasks.length ? (
    <ul className="tasks_list">
      { tasks.map(task => {
        return <Task task={task} key={task.id}/>
      })}
    </ul> ) : (<div>"You have no tasks at the moment :)"</div>)

}

export default TasksList 