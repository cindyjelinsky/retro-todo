import './Global.css'
import { useState,useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import EditTodo from './components/EditTodo'



function App() {
 
 const [todos,setTodos] = useState([])

  const addTodo = todo =>{
    setTodos([...todos,{
      id:Math.floor(Math.random()*1000),
      task:todo,
      isComplete:false
    }])

    console.log(todos)
  }


  const removeTodo = (id) =>{
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo)=>
    todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) =>{
      const newTodos = [...todos]
      newTodos.map((todo)=> todo.id === id ? 
      todo.isComplete = !todo.isComplete : todo)
      setTodos(newTodos)
  }

  const editTodo = (id) =>{
      setTodos(todos.map(todo => todo.id === id ?{
        ...todo, isEditing: !todo.isEditing} : todo
      ))
  }

  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo,task,isEditing: !todo.isEditing}:todo
    ))
  }

  return (

  <div className='App'>
      <Header/> 
      <div className="container">      
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,id)=>(
          todo.isEditing ? (
            <EditTodo editTodo={editTask} task ={todo}/>
          ) : 
              <Todo  editTodo = {editTodo} completeTodo={completeTodo} removeTodo={removeTodo} task = {todo} key={id}/>
        ))} 
        
      </div>
        <Footer/>
  </div>
  
  )
}

export default App
