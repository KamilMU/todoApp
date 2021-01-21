import React, { useState } from 'react';
import styles from './AddTodo.module.css';
import { withRouter } from 'react-router-dom';

function AddTodo({
  submitForm,
  history
}) {
  const [inputTittle, setInputTittle] = useState('');
  const [inputText, setInputText] = useState('');

  return (
    <div className={styles.container}>
      <h1>Add Todo</h1>
      <form onSubmit={e => {
        e.preventDefault();
        submitForm(inputTittle, inputText);
        setInputTittle('');
        setInputText('');
        history.push('/');
      }}>
        <input
          value={inputTittle}
          onChange={(e) => {
            setInputTittle(e.target.value);
          }}
        />
        <textarea
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button type="submit">
          Добавить
        </button>
      </form>
    </div>
  )
}

export default withRouter(AddTodo);