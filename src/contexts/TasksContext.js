import React, { createContext, useReducer } from 'react'
import { tasksReducer } from '../reducers/tasksReducer'

export const TasksContext = createContext();

const TasksContextProvider = (props) => {

  const [tasks, dispatch] = useReducer(tasksReducer, [])

  return(
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TasksContext.Provider>
  )

}

export default TasksContextProvider