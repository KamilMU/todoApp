import React from 'react';
import styles from './Filters.module.css';

const checkboxes = [
  { name: 'open', alias: 'открытые' },
  { name: 'inWork', alias: 'в работе' },
  { name: 'solved', alias: 'решенные' }
];

export default function Filters({ onFilterChange }) {
  return (
    <div className={styles.filters}>
      {checkboxes.map((checkbox, index) => (
        <label
          className={styles.checkboxContainer}
          key={index}>
          {checkbox.alias}
          <input
            type="checkbox"
            name={checkbox.name}
            onChange={onFilterChange}
          />
          <span className={styles.checkmark}></span>
        </label>
      ))}
    </div>
  );
}
