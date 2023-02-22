import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import {
  Container,
  Button,
  ButtonGroup,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";

function Jeu(props) {
  //ANCHOR - Hooks

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

  const [gameOver, setGameOver] = useState(false);
  const [nextGame, setNextGame] = useState(false);

  const colorsSpinner = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "dark",
  ];

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (nextGame) {
      props.setScorePlayer(0);
      props.setScoreIA(0);
      props.setRoundSetted(false);
      props.setNbRound(1);
      props.setRoundId(1);
      setIsDisabled(false);
      setWinner("-");
      setChoice1(<FaHandRock className="align-self-center opacity-0" />);
      setChoice2(<FaHandRock className="align-self-center opacity-0" />);
    }
  }, [nextGame]);

  
  //SECTION - Comportement
  const newGame = () => {
    setGameOver(false);
    setNextGame(true)
  };

  const round = (btnId) => {
    setWinner("-");
    setIsDisabled(true);
    const randomColor = Math.floor(Math.random() * colorsSpinner.length);

    //ANCHOR - setChoice1
    switch (btnId) {
      case 1:
        setChoice1(rock);
        break;
      case 2:
        setChoice1(paper);
        break;
      case 3:
        setChoice1(scissors);
        break;

      default:
        break;
    }
    //ANCHOR - setChoice2
    const random = Math.floor(Math.random() * choices.length);
    const choicesCopy = [...choices];
    setChoice2(
      <Spinner animation="border" variant={colorsSpinner[randomColor]} />
    );

    setTimeout(() => {
      setChoice2(choicesCopy[random]);

      //ANCHOR - Winner
      // Choice IA
      switch (random) {
        // Rock
        case 0:
          // Choice player
          switch (btnId) {
            // Rock
            case 1:
              setWinner("Egalité");
              props.setWhoWon(null);
              break;
            // Paper
            case 2:
              setWinner("Vous avez gagné");
              props.setWhoWon(0);
              break;
            // Scissors
            case 3:
              setWinner("L'IA a gagné");
              props.setWhoWon(1);
              break;

            default:
              break;
          }
          break;
        // Paper
        case 1:
          // Choice player
          switch (btnId) {
            // Rock
            case 1:
              setWinner("L'IA a gagné");
              props.setWhoWon(1);
              break;
            // Paper
            case 2:
              setWinner("Egalité");
              props.setWhoWon(null);
              break;
            // Scissors
            case 3:
              setWinner("Vous avez gagné");
              props.setWhoWon(0);
              break;

            default:
              break;
          }
          break;
        // Scissors
        case 2:
          // Choice player
          switch (btnId) {
            // Rock
            case 1:
              setWinner("Vous avez gagné");
              props.setWhoWon(0);
              break;
            // Paper
            case 2:
              setWinner("L'IA a gagné");
              props.setWhoWon(1);
              break;
            // Scissors
            case 3:
              setWinner("Egalité");
              props.setWhoWon(null);
              break;

            default:
              break;
          }
          break;

        default:
          break;
      }

      //ANCHOR - Fin de round

      props.setRoundId(props.roundId + 1);
      if (props.roundId < props.nbRound && gameOver === false) {
        setIsDisabled(false);
      } else if (props.roundId === props.nbRound) {
        setTimeout(() => {
          setGameOver(true);
        }, 2000);
      }
    }, 1000);
  };
  //!SECTION

  //ANCHOR - Render
  return (
    <>
      {gameOver === false ? (
        <Container className="Jeu">
          <div className="result text-center mb-5">
            <h1
              className={
                (winner === "-" ? "opacity-0 " : "") +
                " display-1 fw-bolder pb-5 text-warning"
              }
            >
              {winner}
            </h1>
          </div>
          <Row>
            <Col className="text-center">
              <Row>
                <Col className="choice1 mb-5 d-flex justify-content-center">
                  {choice1}
                </Col>
              </Row>
              <Row>
                <Col className="mt-5">
                  <ButtonGroup size="lg">
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => round(1)}
                      disabled={isDisabled}
                    >
                      {rock}
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => round(2)}
                      disabled={isDisabled}
                    >
                      {paper}
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => round(3)}
                      disabled={isDisabled}
                    >
                      {scissors}
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
            <Col className="text-center">
              <Row>
                <Col className="choice2 mb-5 d-flex justify-content-center">
                  {choice2}
                </Col>
              </Row>
              <Row>
                <Col className="ia mt-5 d-flex align-items-center justify-content-center">
                  <h1>IA</h1>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <div className="result text-center mb-5">
            <h1 className={"display-1 fw-bolder pb-5 text-danger"}>
              {props.scorePlayer > props.scoreIA
                ? "Vous avez gagné la partie !"
                : props.scorePlayer < props.scoreIA
                ? "L'IA a gagné la partie !"
                : "Egalité entre vous et l'IA !"}
            </h1>
          </div>
          <Row>
            <Col className="text-center">
              <Row>
                <Col className="mb-5 d-flex justify-content-center">
                  <Button size="lg" variant="danger" onClick={newGame}>
                    Nouvelle partie
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Jeu;
