import React from 'react'
import { useState } from 'react'

function TodoList() {
    const [task,setTask]=useState(["Cooking","Shopping","coding","studying"]) 
    const[newTask,setNewTask] =useState("")
    function handleChange(event){
      setNewTask(event.target.value);  
    }
    function AddTask(event){
        
    }
      function DeleteTask(event){
        
    }
      function MoveTaskUp(event){
        if(index > 0){
            const updatedTasks =[...tasks];
            [updatedTasks[index],[index-1]]=[[index -1].[index]];
        }
        
    }
       function MoveTaskDown(event){
        
    }
    return (
        <>
        <div className="TodoList">
            <h1>To Do List</h1>
            <div>
              <input type ="text" placeholder='Task' value ={newTask} OnChange={handleChange}></input>
              <button className="button" onClick={AddTask}>Add</button>
            </div>
            <ol>
                {task.map((task,index)=>
                <li key={index}>
                  <span className="text">{task}</span> 
                  <button className="button" onClick={()=>DeleteTask(index)}>Delete</button> 
                  <button className="button" onClick={()=>MoveTaskUp(index)}>Moveup</button> 
                  <button className="button" onClick={()=>MoveTaskDown(index)}>MoveDown</button> 

                </li>
                )}
            </ol>
        </div>

        </>
        
    )
}

export default TodoList