import React from 'react';
import styles from './TodoList.module.css';

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <ul className={styles.todos}>
        {todos.map(todo => (
          <li className={styles.todos__todo} key={todo.id}>
            <div style={{
              textDecoration: todo.status === 'solved' && "line-through"
            }}>
              <div className={styles.todos__tittle}>
                <b>{todo.tittle}</b>
                {todo.status === 'inWork' && (<span className={styles.inWork}>in work!</span>)}
                {todo.status === 'open' && (<span className={styles.open}>open</span>)}
              </div>
              <div>{todo.text}</div>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
