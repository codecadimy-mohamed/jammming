import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchReasults/SearchResults';


function App() {

  const [results, setResults] = useState('');
  const [list, setList] = useState();
  
  return (
    <>
      <SearchBar toggel={setResults} />
      <SearchResults results={results} toggel={setList} />
    </>
  );
}

export default App;
