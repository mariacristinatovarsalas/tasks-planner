import React, { useContext, useState } from 'react';
import { TasksContext } from '../contexts/TasksContext';

const TaskForm = () => {

  const { dispatch } = useContext(TasksContext)
  const [name, setName] = useState('');
  const [urgency, setUrgency] = useState('')

  const assignUrgency = (e) => {
    e.preventDefault()
    setUrgency(e.target.id)
  }

  const createTask= (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TASK', task: { name: name, urgency: urgency }})
    setName('')
    setUrgency('')

  }


  return(
    <form className="form">
      <div className="btns_container">
        <input type="text" placeholder=" Add new task" value={name} required
        onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="btns_container">
        <button id="urgent" onClick={(e) => assignUrgency(e)} className="semaphorus dark"></button>
        <button id="normal" onClick={(e) => assignUrgency(e)} className="semaphorus medium"></button>
        <button id="not_urgent" onClick={(e) => assignUrgency(e)} className="semaphorus light"></button>
        <button onClick={(e) => createTask(e)} className="btn">Create</button>
      </div>
    </form>
  )

}

export default TaskForm