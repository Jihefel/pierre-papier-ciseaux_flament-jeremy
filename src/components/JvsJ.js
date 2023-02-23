import {
  Container,
  Button,
  ButtonGroup,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import NewGameBtn from "./newGameBtn";
import { useState } from "react";
import WinnerAnnounce from './WinnerAnnounce';
import { FaHandRock } from "react-icons/fa";

function JvsIA(props) {
  //ANCHOR - Hooks

  const [btnId1, setBtnId1] = useState(null);
  const [btnId2, setBtnId2] = useState(null);

  //SECTION - Comportement

  const preRound1 = (id1) => {
    setBtnId1(id1);
    props.setWinner("-");
    props.setIsDisabled(true);
    const randomColor = Math.floor(Math.random() * props.colorsSpinner.length);

    //ANCHOR - setChoice1
    switch (id1) {
      case 1:
        props.setChoice1(
          <Spinner
            animation="border"
            variant={props.colorsSpinner[randomColor]}
          />
        );
        props.setIsDisabled2(false);
        break;
      case 2:
        props.setChoice1(
          <Spinner
            animation="border"
            variant={props.colorsSpinner[randomColor]}
          />
        );
        props.setIsDisabled2(false);
        break;
      case 3:
        props.setChoice1(
          <Spinner
            animation="border"
            variant={props.colorsSpinner[randomColor]}
          />
        );
        props.setIsDisabled2(false);
        break;

      default:
        break;
    }
  };
  //ANCHOR - setChoice2
  const preRound2 = (id2) => {
    setBtnId2(id2);

    switch (id2) {
      case 1:
        props.setChoice2(props.rock);
        props.setIsDisabled2(true);
        break;
      case 2:
        props.setChoice2(props.paper);
        props.setIsDisabled2(true);
        break;
      case 3:
        props.setChoice2(props.scissors);
        props.setIsDisabled2(true);
        break;

      default:
        break;
    }

    //ANCHOR - Winner
    // Choice IA
    switch (id2) {
      // Rock
      case 1:
        // Choice player
        switch (btnId1) {
          // Rock
          case 1:
            props.setChoice1(props.rock);
            props.setWinner("Egalité");
            props.setWhoWon(null);
            break;
          // Paper
          case 2:
            props.setChoice1(props.paper);
            props.setWinner("Le joueur 1 a gagné");
            props.setWhoWon(0);
            break;
          // Scissors
          case 3:
            props.setChoice1(props.scissors);
            props.setWinner("Le joueur 2 a gagné");
            props.setWhoWon(1);
            break;

          default:
            break;
        }
        break;
      // Paper
      case 2:
        // Choice player
        switch (btnId1) {
          // Rock
          case 1:
            props.setChoice1(props.rock);
            props.setWinner("Le joueur 2 a gagné");
            props.setWhoWon(1);
            break;
          // Paper
          case 2:
            props.setChoice1(props.paper);
            props.setWinner("Egalité");
            props.setWhoWon(null);
            break;
          // Scissors
          case 3:
            props.setChoice1(props.scissors);
            props.setWinner("Le joueur 1 a gagné");
            props.setWhoWon(0);
            break;

          default:
            break;
        }
        break;
      // Scissors
      case 3:
        // Choice player
        switch (btnId1) {
          // Rock
          case 1:
            props.setChoice1(props.rock);
            props.setWinner("Le joueur 1 a gagné");
            props.setWhoWon(0);
            break;
          // Paper
          case 2:
            props.setChoice1(props.paper);
            props.setWinner("Le joueur 2 a gagné");
            props.setWhoWon(1);
            break;
          // Scissors
          case 3:
            props.setChoice1(props.scissors);
            props.setWinner("Egalité");
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
    if (props.roundId < props.nbRound && props.gameOver === false) {
      setTimeout(() => {
        props.setIsDisabled(false);
        props.setIsDisabled2(true);
        props.setChoice1(
          <FaHandRock className="align-self-center opacity-0" />
        );
        props.setChoice2(
          <FaHandRock className="align-self-center opacity-0" />
        );
      }, 3000);
    } else if (props.roundId === props.nbRound) {
      setTimeout(() => {
        props.setGameOver(true);
      }, 2000);
    }
  };

  //!SECTION

  //ANCHOR - Render
  return (
    <>
      {props.gameOver === false ? (
        <Container className="JvsIA">
          <WinnerAnnounce
            winner={props.winner}
            roundId={props.roundId}
          ></WinnerAnnounce>
          <Row>
            <Col className="text-center">
              <Row>
                <Col className="choice1 mb-5 d-flex justify-content-center">
                  {props.choice1}
                </Col>
              </Row>
              <Row>
                <Col className="mt-5">
                  <ButtonGroup size="lg">
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => preRound1(1)}
                      disabled={props.isDisabled}
                    >
                      {props.rock}
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => preRound1(2)}
                      disabled={props.isDisabled}
                    >
                      {props.paper}
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => preRound1(3)}
                      disabled={props.isDisabled}
                    >
                      {props.scissors}
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
            <Col className="text-center">
              <Row>
                <Col className="choice2 mb-5 d-flex justify-content-center">
                  {props.choice2}
                </Col>
              </Row>
              <Row>
                <Col className="mt-5 d-flex align-items-center justify-content-center">
                  <ButtonGroup size="lg">
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => preRound2(1)}
                      disabled={props.isDisabled2}
                    >
                      {props.rock}
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => preRound2(2)}
                      disabled={props.isDisabled2}
                    >
                      {props.paper}
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => preRound2(3)}
                      disabled={props.isDisabled2}
                    >
                      {props.scissors}
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <div className="result text-center mb-5">
            <h1 className={"display-1 fw-bolder pb-5 text-danger"}>
              {props.scorePlayer1 > props.scorePlayer2
                ? "Le joueur 1 a gagné la partie !"
                : props.scorePlayer1 < props.scorePlayer2
                ? "Le joueur 2 a gagné la partie !"
                : "Egalité entre vous deux !"}
            </h1>
          </div>
          <Row>
            <Col className="text-center">
              <Row>
                <Col className="mb-5 d-flex justify-content-center">
                  <NewGameBtn newGame={props.newGame}></NewGameBtn>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default JvsIA;
