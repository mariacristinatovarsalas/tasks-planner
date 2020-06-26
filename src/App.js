import React from 'react';
import TasksContextProvider from './contexts/TasksContext';
import Header from './components/Header'
import TasksList from './components/TasksList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div className="app flex">
      <TasksContextProvider>
        <Header />
        <TasksList />
        <TaskForm />
      </TasksContextProvider>
    </div>
  );
}

export default App;
