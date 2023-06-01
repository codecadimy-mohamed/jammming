import React from 'react';
import styles from './SearchBar.module.css'; 

function SearchBar() {
  return (
    <div className={styles.container} >
      <form action='#'>
        <input type='text' id='searchbar' name='searchbar' placeholder='Enter A Song Title' className={styles.searchInput} />
        <br />
        <input type='submit' id='searchbarsubmit' name='submit' value='SEARCH' className={styles.searchButton} />
      </form>
    </div>
  );
}

export default SearchBar;
