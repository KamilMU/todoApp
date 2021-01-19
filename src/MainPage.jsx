import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './MainPage.module.css';
import Filters from './Filters.jsx';
import TodoList from './TodoList.jsx';
import SearchTodo from './SearchTodo.jsx';

function MainPage({
  todos,
  setSearchTerm,
  deleteTodo,
  searchTerm,
  onFilterChange,
}) {
  return (
    <div className={styles.pageOne}>
      <Filters
        onFilterChange={onFilterChange}
      />
      <SearchTodo
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className={styles.pageOne__link}>
        <Link to="/addtodo">
          Добавить задачу
        </Link>
      </div>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default withRouter(MainPage)
