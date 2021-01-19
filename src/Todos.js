import React, { useState } from 'react'
import styles from './Todos.module.css'

function Todos() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  console.log(todos, 'todos')
  return (
    <div className={styles.container}>
      <form onSubmit={e => {
        e.preventDefault();
        setTodos([...todos, {
          id: Date.now(),
          text: inputText
        }])
      }}>
        <input value={inputText} onChange={(e) => {
          setInputText(e.target.value);
          console.log(inputText)
        }} />
      </form>
      <ul className={styles.todos}>
        {todos.map(todo => (
          <li className={styles.todos__todo}>
            <div>{todo.text} </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
