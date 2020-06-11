import React, { useContext, useState } from 'react';
import { TasksContext } from '../contexts/TasksContext';

const TaskForm = () => {

  const { dispatch } = useContext(TasksContext)
  const [name, setName] = useState('');
  const [urgency, setUrgency] = useState('')

  const assignUrgency = (e) => {
    e.preventDefault()
    setUrgency(e.target.innerHTML)
  }

  const createTask= (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TASK', task: { name: name, urgency: urgency }})
    setName('')
    setUrgency('')

  }


  return(
    <form>
      <div>
        <input type="text" placeholder="add new task" value={name} required
        onChange={(e) => setName(e.target.value)}/>
        <button onClick={(e) => createTask(e)}>Crear</button>
      </div>
      <div>
        <button onClick={(e) => assignUrgency(e)}>Urgent</button>
        <button onClick={(e) => assignUrgency(e)}>Normal</button>
        <button onClick={(e) => assignUrgency(e)}>Not Urgent</button>
      </div>
    </form>
  )

}

export default TaskForm