import React from 'react';
import styles from './SearchTodo.module.css';

export default function SearchTodo({ searchTerm, setSearchTerm }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search Todo..."
        autoFocus
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}
