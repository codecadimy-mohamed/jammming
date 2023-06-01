import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import data from '../mockData';

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const results = data[searchValue];
    props.toggel(results);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.container} onSubmit={handleFormSubmit}>
      <form action='#'>
        <input
          type='text'
          id='searchbar'
          name='searchbar'
          placeholder='Enter A Song Title'
          className={styles.searchInput}
          onChange={handleInputChange}
        />
        <br />
        <input
          type='submit'
          id='searchbarsubmit'
          name='submit'
          value='SEARCH'
          className={styles.searchButton}
        />
      </form>
    </div>
  );
}

export default SearchBar;
