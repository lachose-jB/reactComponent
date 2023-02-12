import Todo from "../TodoItem/Todo"
import styles from './TodoList.module.css';
import { checkPropTypes } from "prop-types";
const TodoList = ({todo}) => {
	

    return ( 
		<div className={styles.todoListe}>
			<section className={styles.todoapp}>
					<header className={styles.header}>
						<h1>todos</h1>
						<input className={styles.new_todo} placeholder="What needs to be done?"/>
					</header>
					{/*<!-- This section should be hidden by default and shown when there are todos -->*/}
					<Todo/>
					{/*<!-- This footer should hidden by default and shown when there are todos -->*/}
					<footer className={styles.footer}>
						{/*<!-- This should be `0 items left` by default -->*/}
						<span className={styles.todo_count}><strong>0</strong> item left</span>
						{/*<!-- Remove this if you don't implement routing -->*/}
						<ul className={styles.filters}>
							<li>
								<a className={styles.selected} href="#/">All</a>
							</li>
							<li>
								<a href="#/active">Active</a>
							</li>
							<li>
								<a href="#/completed">Completed</a>
							</li>
						</ul>
						{/*<!-- Hidden if no completed items are left ↓ -->*/}
						<button className={styles.clear_completed}>Clear completed (1)</button>
					</footer>
			</section>
		</div>
     );
  }
  
  export default TodoList;