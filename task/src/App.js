
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState, useEffect} from 'react'
import Footer from './Components/Footer';
 





function App() {
  const [showAddTask, setShowAddTask]=useState(false)

  const [tasks, setTasks] = useState([ ]);

  useEffect(()=>{
const getTasks= async()=>{
  const tasksFromServer = await fetchTasks ()
  setTasks(tasksFromServer)
}

getTasks()
  
}, [])
// fetch tasks
const fetchTasks = async()=>{
  const res = await fetch('http://localhost:3000/tasks')
  const data = await res.json()

return data
}
// fetch task
const fetchTask = async(id)=>{
  const res = await fetch(`http://localhost:3000/tasks/${id}`)
  const data = await res.json()

return data
}

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:3000/tasks',{
      method:'POST',
      headers:{

        'Content-type': 'application/json'
      }, 
      body:JSON.stringify(task)
  
    })
    const data = await res.json()
    setTasks(

   [...tasks, data]
    )
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };
  // OnDelete

  const deleteTask = async (id) => {
await fetch(`http://localhost:3000/tasks/${id}`, {
  method:'DELETE',
})

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask ={...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:3000/task/${id}`,{
      method:'PUT',
      headers:{
        'Content-type': 'apllication/json '
      },
      body: JSON.stringify(updTask)
    })
    const data =await res.json()
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
  };
  return (
  

   
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} title='Task Tracker' showAdd={showAddTask} />

    {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No Tasks to show'}
        
           
        <Footer/>
    </div> 
  
    )
  }


export default App; 
