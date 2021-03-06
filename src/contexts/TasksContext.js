import React, { createContext, useReducer } from 'react'
import { tasksReducer } from '../reducers/tasksReducer'

export const TasksContext = createContext();

const TasksContextProvider = (props) => {

  const [tasks, dispatch] = useReducer(tasksReducer, [
    { name: "Prepare dinner", urgency: "urgent", id: 1 },
    { name: "Organize bedroom", urgency: "not_urgent", id: 2 },
    { name: "Do homework", urgency: "normal", id: 3 },
    { name: "Study for math test", urgency: "urgent", id: 4 },
    { name: "Buy groceries", urgency: "normal", id: 5 }
  ])

  return(
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TasksContext.Provider>
  )

}

export default TasksContextProvider