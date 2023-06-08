import React from 'react';
import styles from './Playlist.module.css';

function Playlist(props) {
  const listArray = ['test1', 'test2'];

  if (props.songList) {
    listArray.push(...props.songList);
  }

  return (
    <div className={styles.container}>
      <input type='text' id='playlistName' name='playlistName' placeholder='Playlist Name' />
      <ul>
        {listArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
