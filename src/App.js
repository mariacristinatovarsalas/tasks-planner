import React from 'react';
import './App.css';
import TasksContextProvider from './contexts/TasksContext';
import Header from './components/Header'
import TasksList from './components/TasksList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div>
      <TasksContextProvider>
        <Header />
        <TasksList />
        <TaskForm />
      </TasksContextProvider>
    </div>
  );
}

export default App;
