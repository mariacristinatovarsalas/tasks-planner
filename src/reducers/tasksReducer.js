export const tasksReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {
        name: action.task.name, 
        urgency: action.task.urgency,
        id: Math.random()}
      ]
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }

} 