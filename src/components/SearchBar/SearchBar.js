import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import appStyles from '../App/App.module.css';

function SearchBar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
    <div className={`${styles.searchBar} ${appStyles.searchBar}`}>
      <form action='#' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          id={styles.inputSearch}
          onChange={handleChange}
          placeholder='Enter A Song Title'
        />
        <br />
        <input type='submit' name='submit' id={styles.submitSearch} />
      </form>
    </div>
  )
}

export default SearchBar;