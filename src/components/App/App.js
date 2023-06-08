import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchReasults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from "./App.module.css";
import Header from '../Header/Header';


const deezerUrl = 'https://deezerdevs-deezer.p.rapidapi.com';
const deezerUrlPost = 'https://connect.deezer.com';
const appID = '609644'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [addedSong, setAddedSong] = useState([]);

  const handleSearchSubmit = async (searchValue) => {

    const genreRequestEndpoint = '/search';
    const requestParams = `?q=${searchValue}`;
    const urlToFetch = `${deezerUrl}${genreRequestEndpoint}${requestParams}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fae1acdad8mshf55abf9b4a09f6dp169cc1jsnf1fe5509f17f',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(urlToFetch, options);
      if (response.ok) {
        const result = await response.json();
        if (result.data) {
          setSearchResults(result.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // here the clickedSong is an object
  const handleAddedSong = (clickedSong) => {
    let checker = false;
    for (const songObject of addedSong) {
      if (songObject === clickedSong) {
        checker = true;
      }
    }
    if (checker === false) {
      const updatedSongs = [...addedSong, clickedSong];
      setAddedSong(updatedSongs);
    } else {
      alert(`**${clickedSong.title}** already exist`)
    }
  };

  const handleRemove = (songIndex) => {
    const updatedSongs = addedSong.filter((_, index) => index !== songIndex);
    setAddedSong(updatedSongs);
  };

  // make post request 

  async function handleSubmit() {
    const genreRequestEndpoint = '/oauth/auth.php';
    const requestParams = `?app_id=${appID}&redirect_uri=http://localhost:3000/&perms=basic_access,email`;
    const urlToFetch = `${deezerUrlPost}${genreRequestEndpoint}${requestParams}`;

    try {
      const response = await fetch(urlToFetch) ;

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // here you can do what you want  
      }

    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className={styles.appContainer}>
      <Header />
      <SearchBar onSubmit={handleSearchSubmit} />
      <SearchResults searchResults={searchResults} onClick={handleAddedSong} />
      <Playlist addedSong={addedSong} onRemove={handleRemove} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
