import React, { useContext, useEffect, useState } from 'react'
import { TasksContext } from '../contexts/TasksContext'

const Task = ({ task }) => {

  const { dispatch } = useContext(TasksContext)
  const [color, setColor] = useState(task.urgency)

  const backgroundColors = () => {

    switch(color) {
      case "Urgent":
        setColor("red")
        break
      case "Normal":
        setColor("yellow")
        break
      case "Not Urgent":
        setColor("green")
        break
    }
  }

  useEffect (() => {
    backgroundColors()
  },[color])


  return (
    <li style={{backgroundColor: color}}> 
      <div>{task.name}</div>
      <div>{task.urgency}</div>
      <div>
        <button onClick={() => dispatch({ type: 'DELETE_TASK', id: task.id })}>Delete</button>
        <button>Urgent</button>
        <button>Normal</button>
        <button>Not Urgent</button>
      </div>
    </li>
  )

}

export default Task