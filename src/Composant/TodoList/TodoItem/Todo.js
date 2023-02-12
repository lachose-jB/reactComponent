import { checkPropTypes } from "prop-types";
import styles from './Todo.module.css';
const Todo = (id, title) => {
    

  return ( 
    <section className={styles.todo}>
        <input id="toggle_all" className={styles.toggle_all} type="checkbox" />
        <label htmlFor="toggle_all">Mark all as complete</label>
        <ul className={styles.todo_list}>
            {/*<!-- These are here just to show the structure of the list items -->*/}
            {/*<!-- List items should get the className `editing` when editing and `completed` when marked as completed -->*/}
            <li className={styles.completed}>
                <div className={styles.view}>
                <input className={styles.toggle} type="checkbox" checked />
                    <label>Taste JavaScript</label>
                    <button className={styles.destroy}></button>
                </div>
                <input className={styles.edit} value="Create a TodoMVC template" />
            </li>
            <li>
                <div className={styles.view}>
                    <input className={styles.toggle} type="checkbox" />
                    <label>Buy a unicorn</label>
                    <button className={styles.destroy}></button>
                </div>
                <input className={styles.edit} value="Rule the web" />
            </li>
        </ul>
    </section>
   );
}

export default Todo;