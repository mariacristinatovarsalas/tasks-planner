import React, { useContext, useEffect, useState } from 'react'
import { TasksContext } from '../contexts/TasksContext'

const Task = ({ task }) => {

  const { dispatch } = useContext(TasksContext)
  const [color, setColor] = useState(task.urgency)

  const backgroundColors = () => {

    switch(color) {
      case "urgent":
        setColor("#9C8B3E")
        break
      case "normal":
        setColor("#D6BC42")
        break
      case "not_urgent":
        setColor("#FFE25F")
        break
    }
  }

  useEffect (() => {
    backgroundColors()
  },[color])


  return (
    <li style={{backgroundColor: color}} className="task"> 
      <div className="btns_container thing_container">{task.name}</div>
      {/* <div>{task.urgency}</div> */}
      <div className="btns_container">
        <button onClick={() => dispatch({ type: 'DELETE_TASK', id: task.id })} className="btn flex">Delete</button>
        <button onClick={()=>setColor("urgent")} className="semaphorus dark"></button>
        <button onClick={()=>setColor("normal")} className="semaphorus medium"></button>
        <button onClick={()=>setColor("not_urgent")} className="semaphorus light"></button>
      </div>
    </li>
  )

}

export default Task