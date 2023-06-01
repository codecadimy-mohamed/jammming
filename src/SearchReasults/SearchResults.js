import React, { useState } from 'react';
import styles from './SearchResults.module.css';

function SearchResults(props) {

  

  function handleAddedLists(e) {
    props.toggle = e.target;
  }
  return (
    <div className={styles.container}>
      <ul>
        Results
        {Array.isArray(props.results) && (
          props.results.map(song =>
            <li className={styles.song} onClick={handleAddedLists}>
              {song.name}
              <br />
              <span className={styles.additionalContent}>{song.kind} | {song.singer}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default SearchResults;