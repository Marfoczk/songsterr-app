import React, { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Results from "./components/Results/Results";
import "./App.scss";

const TABS = ["PLAYER", "CHORDS", "TEXT_BASS_TAB", "TEXT_GUITAR_TAB"];

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchSongs = async e => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(
      `http://www.songsterr.com/a/ra/songs.json?pattern=${search}`
    );
    const data = await res.json();
    setResults(data);
    setIsLoading(false);
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
        <Buttons tabs={TABS} onButtonClick={setSelectedTab} selectedTab={selectedTab} />
      </form>

      <Results results={results} selectedTab={selectedTab} isLoading={isLoading} />
    </div>
  );
}

export default App;
