import React from 'react';
import styles from './Playlist.module.css';
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


function Playlist({ addedSong, onRemove, onSubmit }) {
  function handleClick(e) {
    const songIndex = parseInt(e.target.getAttribute('data-key'), 10);
    onRemove(songIndex);
  }

  const songListChose = addedSong.map((song, index) => {
    return (
      <li key={index} className={styles.playlistSongContainer}>

        <span className={styles.pictureContainer}>
          <img src={song.artist.picture} className={styles.picture} alt={song.title} />
        </span>

        <span className={styles.infContainer}>

          <span className={styles.songName}>
            <a className={styles.songLink} href={song.link} target='_blank' rel="noreferrer" >
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
          className={styles.minusSymbol}
          data-key={index}
          onClick={handleClick}
        >
          -
        </span>
      </li>
    );
  });

  return (
    <div className={`${styles.playlist} ${appStyles.playlist}`}>
      <form action="#" onSubmit={onSubmit}>
        <input
          type="text"
          name="listName"
          className={styles.listName}
          placeholder='Playlist Name'
        />
        <ul>{songListChose}</ul>
        <input
          type="submit"
          name="savePlalylist"
          value="SAVE TO SPOTIFY"
          className={styles.saveToSpotify}
        />
      </form>
    </div>
  );
}

export default Playlist;
