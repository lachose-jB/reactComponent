import TodoList from "./Composant/TodoList/Todolist/TodoList"
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([
		{
		  id: "0",
		  title: "tout",
		  completed: false
		}
	  ]);
	
	  const AjoutTodo = (title)=>{
		
	   
		}
	  const SuprTodo = (todo)=>{
		this.todo = this.todo.filter(t=>t!==todo)
	   
		}
	
	  const ModifTodo = (todo, title)=>{
		
		this.todo = this.todo.map( t => t===todo?{ ...t, title }:t)
	   
		}
	  const SuprAllTodo = ()=>{
		
		this.todo = this.todo.filter(t=>t !==todo.completed)
	   
		}
	  const ToggleTodo = (todo, completed = true)=>{
		this.todo = this.todo.map( t => t===todo?{ ...t, completed }:t)
		}
	  const ToggleAllTodo = (completed = true)=>{
		this.todo = this.todo.map( t => completed !==t.completed?{ ...t, completed }:t)
		}
  
  return (
		<TodoList/>
  );
}


export default App;
