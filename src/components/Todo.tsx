import  React from "react"
import { useState } from "react"
import  "./Todo.css"



const Todo = ({task,completeTodo,removeTodo,editTodo}) => {

  return (

   <div>
      <div  className="container-todo">
            <div className="content">
                <p style={{textDecoration: task.isComplete? "line-through"  : ""}}>&gt; {task.task}</p>
            </div>
            <div className="container-btn">
               <button className="btn-task"onClick={()=>completeTodo(task.id)} >Done</button> 
               <button onClick={()=>editTodo(task.id)} className="btn-task">Edit</button> 
               <button onClick={()=>removeTodo(task.id)} className="btn-task">Delete</button> 
            </div>
        </div>                        
   </div>
  )
}

export default Todo