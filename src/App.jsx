import Characters from "./components/Characters";
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Meus personagens</h1>

      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
