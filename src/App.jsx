import React, { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Results from "./components/Results/Results";
import "./App.scss";

const TABS = ["PLAYER", "CHORDS", "TEXT_BASS_TAB", "TEXT_GUITAR_TAB"];

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState();

  const fetchSongs = async e => {
    e.preventDefault();

    const res = await fetch(
      `http://www.songsterr.com/a/ra/songs.json?pattern=${search}`
    );
    const data = await res.json();
    setResults(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={fetchSongs}>
        <input
          className="form__input"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="form__button" type="submit">
          Search
        </button>
        <Buttons types={TABS} onButtonClick={setSelectedTab} />
      </form>

      <Results results={results} selectedTab={selectedTab} />
    </div>
  );
}

export default App;
