import React, { useEffect, useState } from 'react';
import Result from './components/Result';
import Buttons from './components/Buttons';
import './App.css';


function App() {

  const [results, setResults] = useState([]); 
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [tabs, setTabs] = useState(['PLAYER', 'CHORDS', 'TEXT_BASS_TAB', 'TEXT_GUITAR_TAB']);


    useEffect(() => {

      const getAPI = async () => {
        const res = await fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${query}`)
        const data = await res.json();
        setResults(data);
        console.log(data);
      };

      getAPI();
    }, [query]);


      const getTabs = (e) => {
        e.preventDefault();
        setTabs(e.target.value);
        console.log(e.target.value);
      };


    const updateSearch = e => {
      setSearch(e.target.value);
      };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
      setTabs(['PLAYER', 'CHORDS', 'TEXT_BASS_TAB', 'TEXT_GUITAR_TAB'])
    }

  return (
    <div className="App">
      <form className ="form" onSubmit={getSearch}>
        <input className="form__input" type="text" value={search} onChange={updateSearch}/>
        <button className="form__button" type="submit">Search</button>
        <Buttons getTabs={getTabs}/>
      </form>

      <ul className="results">
      {results.filter(result => result.tabTypes.includes(...tabs) || result.tabTypes.includes(tabs)).map((result, index) =>(
        <Result 
            key={index}
            title={result.title}
            name={result.artist.name}
            tabTypes={result.tabTypes}
            id={result.id}
        />
      ))}
      </ul>
    </div>
  );
}

export default App;
