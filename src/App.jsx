import Characters from "./components/Characters";
import "./App.css";
import { PageTransition } from "next-page-transitions";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

import React, { useState, useEffect } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);

  const [page, setPage] = useState(1);

  const [next, setNext] = useState("");

  console.log(next);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
  }, [page]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setNext(response.info.next));
  }, [page]);

  const prevButton = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextButton = () => {
    if (next !== null) {
      setPage(page + 1);
    }
  };

  return (
    <div className="App">
      <div className="nav">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-35R0_8jZR1XtzjSDYOajVaPGDRuF6X4AmC1Vdi47q_yxObltiCveJZgye5b0TgFHNYs&usqp=CAU"></img>

        <div>
          <button onClick={prevButton}>
            {" "}
            <MdSkipPrevious />
          </button>
          <button onClick={nextButton}>
            <MdSkipNext />
          </button>
        </div>
      </div>
      <PageTransition timeout={300} classNames="page-transition">
        <Characters characterList={characterList} />
      </PageTransition>
    </div>
  );
}

export default App;
