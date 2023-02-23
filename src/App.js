import JvsIA from "./components/JvsIA";
import JvsJ from "./components/JvsJ";
import ScoreTable from "./components/ScoreTable";
import InputRound from "./components/InputRound";
import ModeChoice from "./components/ModeChoice";
import React, { useState, useEffect } from "react";
import shifumiDbz from "./assets/videos/shifumi-dbz.mp4";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

function App() {
  const [whoWon, setWhoWon] = useState(null);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  const [roundSetted, setRoundSetted] = useState(false);
  const [nbRound, setNbRound] = useState(1);
  const [roundId, setRoundId] = useState(1);

  const [gameId, setGameId] = useState(1);

  const [modeSetted, setModeSetted] = useState(false);
  const [gameMode, setGameMode] = useState("-");

  const [choice1, setChoice1] = useState(
    <FaHandRock className="align-self-center opacity-0" />
  );
  const [choice2, setChoice2] = useState(
    <FaHandRock className="align-self-center opacity-0" />
  );

  const [winner, setWinner] = useState("-");

  const rock = <FaHandRock className="align-self-center" />;
  const paper = <FaHandPaper className="align-self-center" />;
  const scissors = <FaHandScissors className="align-self-center" />;

  const choices = [rock, paper, scissors];

  const colorsSpinner = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "dark",
  ];

  const [gameOver, setGameOver] = useState(false);
  const [nextGame, setNextGame] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(true);
  
  const [scoresTable, setScoresTable] = useState([]);
  

  useEffect(() => {
    switch (whoWon) {
      case 0:
        setScorePlayer1(scorePlayer1 + 1);
        setWhoWon(null);
        
        break;
      case 1:
        setScorePlayer2(scorePlayer2 + 1);
        setWhoWon(null);
        break;

      default:
        break;
    }
  }, [whoWon]);


  useEffect(() => {
    if (nextGame) {
      setScorePlayer1("");
      setScorePlayer2("");
      setRoundSetted(false);
      setNbRound(1);
      setRoundId(1);
      setGameMode(null);
      setModeSetted(false);
      setIsDisabled(false);
      setIsDisabled2(false);
      setWinner("-");
      setChoice1(<FaHandRock className="align-self-center opacity-0" />);
      setChoice2(<FaHandRock className="align-self-center opacity-0" />);
      setNextGame(false)
    }
  }, [nextGame]);

  const validateRounds = () => {
    if (nbRound >= 1 && nbRound <= 100) {
      setRoundSetted(true);
      setScorePlayer1(0);
      setScorePlayer2(0);
    } else {
      alert("Entrez un nombre entre 1 et 100");   
    }
  };


  const newGame = () => {
    setGameOver(false);
    setGameId(gameId+1);
  
    const newScoreEntry = [scorePlayer1, scorePlayer2, gameMode];
    const newScoresTable = [...scoresTable, newScoreEntry];
    setScoresTable(newScoresTable);
    console.log(newScoresTable)
    setNextGame(true);
  };
  

  return (
    <>
      <video autoPlay muted loop src={shifumiDbz}></video>
      <div className="App d-flex align-items-center justify-content-center">
          <ScoreTable
            scorePlayer1={scorePlayer1}
            setScorePlayer1={setScorePlayer1}
            scorePlayer2={scorePlayer2}
            setScorePlayer2={setScorePlayer2}
            gameMode={gameMode}
            modeSetted={modeSetted}
            gameId={gameId}
            scoresTable={scoresTable}
            nextGame={nextGame}
            />
        {roundSetted ? (
            gameMode === 1 ? (
              <JvsIA
                whoWon={whoWon}
                setWhoWon={setWhoWon}
                nbRound={nbRound}
                setNbRound={setNbRound}
                roundId={roundId}
                setRoundSetted={setRoundSetted}
                setRoundId={setRoundId}
                scorePlayer1={scorePlayer1}
                setScorePlayer1={setScorePlayer1}
                scorePlayer2={scorePlayer2}
                setScorePlayer2={setScorePlayer2}
                setModeSetted={setModeSetted}
                isDisabled={isDisabled}
                setIsDisabled={setIsDisabled}
                choice1={choice1}
                setChoice1={setChoice1}
                choice2={choice2}
                setChoice2={setChoice2}
                choices={choices}
                gameOver={gameOver}
                setGameOver={setGameOver}
                gameMode={gameMode}
                setGameMode={setGameMode}
                nextGame={nextGame}
                setNextGame={setNextGame}
                winner={winner}
                setWinner={setWinner}
                rock={rock}
                paper={paper}
                scissors={scissors}
                newGame={newGame}
                colorsSpinner={colorsSpinner}
              />
            ) : gameMode === 2 ? (
              <JvsJ
              whoWon={whoWon}
              setWhoWon={setWhoWon}
              nbRound={nbRound}
              setNbRound={setNbRound}
              roundId={roundId}
              setRoundSetted={setRoundSetted}
              setRoundId={setRoundId}
              scorePlayer1={scorePlayer1}
              setScorePlayer1={setScorePlayer1}
              scorePlayer2={scorePlayer2}
              setScorePlayer2={setScorePlayer2}
              setModeSetted={setModeSetted}
              isDisabled={isDisabled}
              setIsDisabled={setIsDisabled}
              isDisabled2={isDisabled2}
              setIsDisabled2={setIsDisabled2}
              choice1={choice1}
              setChoice1={setChoice1}
              choice2={choice2}
              setChoice2={setChoice2}
              choices={choices}
              gameOver={gameOver}
              setGameOver={setGameOver}
              gameMode={gameMode}
              setGameMode={setGameMode}
              nextGame={nextGame}
              setNextGame={setNextGame}
              winner={winner}
              setWinner={setWinner}
              rock={rock}
              paper={paper}
              scissors={scissors}
              newGame={newGame}
              colorsSpinner={colorsSpinner}
              />
            ) : null
          
        ) : modeSetted === false ? (
          <ModeChoice setModeSetted={setModeSetted} setGameMode={setGameMode} />
        ) : (
          <InputRound
            nbRound={nbRound}
            setNbRound={setNbRound}
            validateRounds={validateRounds}
          />
        )}
      </div>
    </>
  );
}

export default App;
