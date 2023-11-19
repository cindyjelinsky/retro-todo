import React from 'react'
import { useState } from 'react';
import "./EditTodo.css"

const EditTodo = ({task,editTodo}) => {
  
  
    const [value,setValue]= useState(task.task);

 
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!value) return;
      editTodo(value,task.id)
      setValue("");

    };
  
    
    return (
      <div className="edit-container-form">
          <h1>Update Task</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="> Enter new task..."  onChange={(e)=>setValue(e.target.value)} value={value}/>
      <button type="submit" id="btnInput">Update</button>
      </form>
      </div>  
  )
}

export default EditTodo