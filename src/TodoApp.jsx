import React, { useState, useEffect } from 'react';
import styles from './TodoApp.module.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import AddTodo from './AddTodo.jsx';

function TodoApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTodos, setCurrentTodos] = useState([])
  const [allTodos, setAllTodos] = useState([
    {
      id: 1,
      tittle: "Go for a walk",
      text: "Walk at least 40min",
      status: "solved"
    },
    {
      id: 2,
      tittle: "Eat a burger",
      text: "eat a cheese burger",
      status: "solved"
    },
    {
      id: 3,
      tittle: "watch a tv",
      text: "watch some comedy show",
      status: "inWork"
    }
  ])
  const [checkboxesStatus, setCheckboxesStatus] = useState({
    open: false,
    inWork: false,
    solved: false,
  })

  useEffect(() => {
    onFilterChange(checkboxesStatus);
  }, [checkboxesStatus]);

  useEffect(() => {
    searchTodo(searchTerm);
  }, [searchTerm]);

  function handleFilterChange(e) {
    setCheckboxesStatus({
      ...checkboxesStatus,
      [e.target.name]: e.target.checked
    })

  }

  function submitForm(inputTittle, inputText) {
    inputText !== "" && (
      setCurrentTodos([...currentTodos, {
        id: Date.now(),
        tittle: inputTittle,
        text: inputText,
        status: "open"
      }]));
  }

  function searchTodo(searchTerm) {
    if (searchTerm.length) {
      setCurrentTodos(
        allTodos.filter(todo =>
          todo.tittle.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setCurrentTodos(allTodos);
    }
  }

  function deleteTodo(id) {
    setAllTodos(allTodos.filter(todo => todo.id !== id))
  }

  function onFilterChange(filters) {
    const activeCheckboxes = Object
      .keys(filters)
      .filter(checkboxKey => filters[checkboxKey]);
    if (activeCheckboxes.length) {
      setCurrentTodos(
        allTodos.filter(todo => {
          return activeCheckboxes.every(activeCheckbox => {
            return todo.status === activeCheckbox
          })
        })
      );
    } else {
      setCurrentTodos(allTodos);
    }
  }

  return (
    <div className={styles.app}>
      <Switch>
        <Route
          exact path="/"
          render={
            () =>
              <MainPage
                todos={currentTodos}
                deleteTodo={deleteTodo}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onFilterChange={handleFilterChange}
              />}
        />
        <Route exact path="/addtodo"
          render={
            () =>
              <AddTodo
                submitForm={submitForm}
              />}
        />
      </Switch>
    </div>
  )
}

export default TodoApp
