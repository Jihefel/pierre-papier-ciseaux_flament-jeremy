import Jeu from './components/Jeu';
import ScoreTable from './components/ScoreTable';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


function App() {

  const [whoWon, setWhoWon] = useState(null)
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreIA, setScoreIA] = useState(0);

  const [roundSetted, setRoundSetted] = useState(false);
  const [nbRound, setNbRound] = useState(1);

  useEffect(() => {
    switch (whoWon) {
      case 0:
        setScorePlayer(scorePlayer+1)
        setWhoWon(null)
        break;
      case 1:
        setScoreIA(scoreIA + 1)
        setWhoWon(null)
        break;
    
      default:
        break;
    }
  }, [whoWon]);

  
  return (
    <div className='App'>
      <div className="question">
        <label for="rounds">Combien de rounds voulez-vous ? (max 100)</label>
        <br />
        <input type="number" id="rounds" min={1} max={100} value={nbRound} onChange={(e)=> setNbRound(e.target.value)}/>
        <Button onClick={()=> setRoundSetted(true)} >Valider</Button>
      </div>
      {roundSetted ? (<><ScoreTable scorePlayer={scorePlayer} setScorePlayer={setScorePlayer} scoreIA={scoreIA} setScoreIA={setScoreIA} />
      <Jeu whoWon={whoWon} setWhoWon={setWhoWon} /></>) : null}
      
    </div>
  );
}

export default App;
