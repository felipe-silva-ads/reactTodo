import React, {useState} from 'react';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TaskDetails from './components/TaskDetails';


const App = () =>{
const [tasks,setTasks] = useState([
  {
    id: '1',
    title: 'Estudar Programação',
    completed: false,
    description: 'Descrição de Estudar Programação'
  },
  {
    id: '2',
    title: 'Estudar Design',
    completed: true,
    description: 'Descrição de Estudar Design'
  }

]);

const handleAddTaskClick = (taskId) =>{
  const newTasks = tasks.map((task) =>{
    if(task.id === taskId) return{...task, completed: !task.completed}
    return task;
  });
  setTasks(newTasks)
}

const handleTaskAddition = (taskTitle) =>{
  const newTasks = [
    ...tasks,
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
];
  setTasks(newTasks)
};

const handleTaskDeletion = (taskId) =>{
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks)
}

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path='/' exact render={()=>(
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks 
              tasks = {tasks} 
              handleAddTaskClick= {handleAddTaskClick}
              handleTaskDeletion = {handleTaskDeletion} 
            />
          </>
        )}>

        </Route>

        <Route path='/:taskTitle' exact component={TaskDetails}></Route>
      </div>
      <p className='footer'>App Developed By: Felipe Silva</p>
    </Router>
  );
}

export default App;