import React from "react";
import styles from './SearchResults.module.css';
import appStyles from '../App/App.module.css';

function timeHandler(songDuration) {
  const minutes = Math.floor(songDuration / 60);
  const secondes = (songDuration % 60);

  if (minutes < 10) {
    if (secondes < 10) {
      return `0${minutes}:0${secondes}`;
    } else {
      return `0${minutes}:${secondes}`;
    };
  } else {
    if (secondes < 10) {
      return `${minutes}:0${secondes}`;
    } else {
      return `${minutes}:${secondes}`;
    };
  }
}

function SearchResults({ searchResults, onClick }) {
  // handle added (clicked) song
  function handleAddedSong(e) {
    const index = e.target.getAttribute('data-key');
    const songAdded = searchResults[index]
    onClick(songAdded);
  }

  const songList = searchResults.map((song, index) => {
    return (
      <li key={index} className={styles.resultsSongContainer}>

        <span className={styles.pictureContainer}>
          <img src={song.artist.picture} className={styles.picture} />
        </span>

        <span className={styles.infContainer}>
          <span className={styles.songName}>
            <a className={styles.songLink} href={song.preview} target='_blank'>
              {song.title}
            </a>
          </span>

          <span className={styles.songDuration}>{timeHandler(song.duration)}</span>

          <br />

          <span className={styles.additionalInf}>
            {song.artist.name} | {song.album.title}
          </span>
        </span>

        <span
          className={styles.plusSymbol}
          onClick={handleAddedSong}
          data-key={index}
        >
          +
        </span>
      </li>
    )
  });

  return (
    <div className={`${styles.searchResults} ${appStyles.searchResults}`}>
      <ul>
        Results
        {songList}
      </ul>
    </div>
  );
};

export default SearchResults;