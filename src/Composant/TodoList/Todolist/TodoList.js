import Todo from "../TodoItem/Todo"
import { checkPropTypes } from "prop-types";
const TodoList = () => {

    return ( 
      <div>
        <section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" autofocus />
			</header>
			{/<!-- This section should be hidden by default and shown when there are todos -->/}
			
			{/<!-- This footer should hidden by default and shown when there are todos -->/}
			<footer className="footer">
				{/<!-- This should be `0 items left` by default -->/}
				<span className="todo-count"><strong>0</strong> item left</span>
				{/<!-- Remove this if you don't implement routing -->/}
				<Todo/>
				{/<!-- Hidden if no completed items are left ↓ -->/}
				<button className="clear-completed">Clear completed (1)</button>
			</footer>
		</section>
		<footer className="info">
			<p>Double-click to edit a todo</p>
			{/<!-- Remove the below line ↓ -->/}
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			{/<!-- Change this out with your name and url ↓ -->/}
			<p>Created by <a href="http://todomvc.com">you</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
      </div>
     );
  }
  
  export default TodoList;