
import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState} from 'react'




function App() {
  const [ tasks, setTasks] =useState([
    {
      id: 1,
      text:'taking new Exam',
      day:'22 sept 2020',
      reminder: true,
    },
    {
      id: 2,
      text:'visit new Gym',
      day:'22 july 2019',
      reminder: true,
    },
    {
      id: 3,
      text:'Going for Shopping',
      day:'22 sept 2022',
      reminder: false,
    },
    
  ])
// Add Task
const addTask = () => {
console.log ( task)
}
  // OnDelete
  const deleteTask = (id)=> {
    setTasks ( tasks.filter((task)=> task.id !== id)) 
  }
  // toggle reminder
    const toggleReminder = (id) =>{
      setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
    }
  return (
    <div className="container">
      < Header />
      < AddTask onAdd= {addTask} /> 
      { tasks.length > 0 ?  < Tasks tasks={tasks} onDelete={deleteTask}  onToggle ={toggleReminder }    />
       : 'No Tasks to show'}  
    </div>
  );
}

export default App; 
