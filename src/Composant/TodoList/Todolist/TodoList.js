import Todo from "../TodoItem/Todo"
import { checkPropTypes } from "prop-types";
const TodoList = ({todo}) => {
	

    return ( 
      <section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?"/>
			</header>
			{/*<!-- This section should be hidden by default and shown when there are todos -->*/}
				<Todo/>
			{/*<!-- This footer should hidden by default and shown when there are todos -->*/}
			<footer className="footer">
				{/*<!-- This should be `0 items left` by default -->*/}
				<span className="todo-count"><strong>0</strong> item left</span>
				{/*<!-- Remove this if you don't implement routing -->*/}
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				{/*<!-- Hidden if no completed items are left ↓ -->*/}
				<button className="clear-completed">Clear completed (1)</button>
			</footer>
		</section>
     );
  }
  
  export default TodoList;