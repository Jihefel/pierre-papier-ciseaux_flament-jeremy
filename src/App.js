import Jeu from "./components/Jeu";
import ScoreTable from "./components/ScoreTable";
import InputRound from "./components/InputRound";
import React, { useState, useEffect } from "react";
import shifumiDbz from "./assets/videos/shifumi-dbz.mp4";

function App() {
  const [whoWon, setWhoWon] = useState(null);
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreIA, setScoreIA] = useState(0);

  const [roundSetted, setRoundSetted] = useState(false);
  const [nbRound, setNbRound] = useState(1);
  const [roundId, setRoundId] = useState(1);
  
  useEffect(() => {
    switch (whoWon) {
      case 0:
        setScorePlayer(scorePlayer + 1);
        setWhoWon(null);
        break;
      case 1:
        setScoreIA(scoreIA + 1);
        setWhoWon(null);
        break;

      default:
        break;
    }
  }, [whoWon]);

  const validateRounds = () => {
    if (nbRound >= 1 && nbRound <= 100) {
      setRoundSetted(true);
    } else {
      alert("Entrez un nombre entre 1 et 100");
    }
  };

  return (
    <>
      <video autoPlay muted loop src={shifumiDbz}></video>
      <div className="App d-flex align-items-center justify-content-center">
        {roundSetted ? (
            <>
              <ScoreTable
                scorePlayer={scorePlayer}
                setScorePlayer={setScorePlayer}
                scoreIA={scoreIA}
                setScoreIA={setScoreIA}
              />
              <Jeu
                whoWon={whoWon}
                setWhoWon={setWhoWon}
                nbRound={nbRound}
                setNbRound={setNbRound}
                roundId={roundId}
                setRoundSetted={setRoundSetted}
                setRoundId={setRoundId}
                scorePlayer={scorePlayer}
                setScorePlayer={setScorePlayer}
                scoreIA={scoreIA}
                setScoreIA={setScoreIA}
              />
            </>
          ) : (
          <InputRound
            nbRound={nbRound}
            setNbRound={setNbRound}
            validateRounds={validateRounds}
          ></InputRound>
        )}
      </div>
    </>
  );
}

export default App;
