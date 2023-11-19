import React from 'react'
import { useState } from 'react';
import "./TodoForm.css"

const TodoForm = ({addTodo}) => {
  
  
    const [value,setValue]= useState("");

 
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!value) return;
      addTodo(value)
      setValue("");

    };
  
  
    return (
      <div className="container-form">
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="> Enter new task..."  onChange={(e)=>setValue(e.target.value)} value={value}/>
      <button type="submit" id="btnInput">Press Enter</button>
      </form>
      </div>  
  )
}

export default TodoForm