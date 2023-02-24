import {
  Container,
  Button,
  ButtonGroup,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import NewGameBtn from "./newGameBtn";
import WinnerAnnounce from "./WinnerAnnounce";
import { FaHandRock } from "react-icons/fa";

function JvsIA(props) {
  //SECTION - Comportement
  const round = (btnId) => {
    props.setWinner("-");
    props.setIsDisabled(true);
    const randomColor = Math.floor(Math.random() * props.colorsSpinner.length);

    //ANCHOR - setChoice1
    switch (btnId) {
      case 1:
        props.setChoice1(props.rock);
        break;
      case 2:
        props.setChoice1(props.paper);
        break;
      case 3:
        props.setChoice1(props.scissors);
        break;

      default:
        break;
    }
    //ANCHOR - setChoice2
    const random = Math.floor(Math.random() * props.choices.length);
    const choicesCopy = [...props.choices];
    props.setChoice2(
      <Spinner animation="border" variant={props.colorsSpinner[randomColor]} />
    );

    setTimeout(() => {
      props.setChoice2(choicesCopy[random]);

      //ANCHOR - Winner
      // Choice IA
      switch (random) {
        // Rock
        case 0:
          // Choice player
          switch (btnId) {
            // Rock
            case 1:
              props.setWinner("Egalité");
              props.setWhoWon(null);
              break;
            // Paper
            case 2:
              props.setWinner("Vous avez gagné");
              props.setWhoWon(0);
              break;
            // Scissors
            case 3:
              props.setWinner("L'IA a gagné");
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
              props.setWinner("L'IA a gagné");
              props.setWhoWon(1);
              break;
            // Paper
            case 2:
              props.setWinner("Egalité");
              props.setWhoWon(null);
              break;
            // Scissors
            case 3:
              props.setWinner("Vous avez gagné");
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
              props.setWinner("Vous avez gagné");
              props.setWhoWon(0);
              break;
            // Paper
            case 2:
              props.setWinner("L'IA a gagné");
              props.setWhoWon(1);
              break;
            // Scissors
            case 3:
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
          props.setChoice1(
            <FaHandRock className="align-self-center opacity-0" />
          );
          props.setChoice2(
            <FaHandRock className="align-self-center opacity-0" />
          );
        }, 1500);
      } else if (props.roundId === props.nbRound) {
        setTimeout(() => {
          props.setGameOver(true);
        }, 2000);
      }
    }, 1000);
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
                      onClick={() => round(1)}
                      disabled={props.isDisabled}
                    >
                      {props.rock}
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => round(2)}
                      disabled={props.isDisabled}
                    >
                      {props.paper}
                    </Button>
                    <Button
                      variant="success"
                      className="d-flex"
                      onClick={() => round(3)}
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
              {props.scorePlayer1 > props.scorePlayer2
                ? "Vous avez gagné la partie !"
                : props.scorePlayer1 < props.scorePlayer2
                ? "L'IA a gagné la partie !"
                : "Egalité entre vous et l'IA !"}
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
