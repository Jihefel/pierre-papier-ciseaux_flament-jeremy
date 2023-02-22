import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { Container, Button, ButtonGroup, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function Jeu(props) {
  //ANCHOR - Hooks
  const [choice1, setChoice1] = useState(
    <FaHandRock className="align-self-center text-white" />
  );
  const [choice2, setChoice2] = useState(
    <FaHandRock className="align-self-center text-white" />
  );
  const [winner, setWinner] = useState("-");


  const rock = <FaHandRock className="align-self-center" />;
  const paper = <FaHandPaper className="align-self-center" />;
  const scissors = <FaHandScissors className="align-self-center" />;

  const choices = [rock, paper, scissors];

  //SECTION - Comportement
  const round = (btnId) => {
    
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
            props.setWhoWon(null)
            break;
          // Paper
          case 2:
            setWinner("Vous avez gagné");
            props.setWhoWon(0)
            break;
          // Scissors
          case 3:
            setWinner("L'IA a gagné");
            props.setWhoWon(1)
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
            props.setWhoWon(1)
            break;
          // Paper
          case 2:
            setWinner("Egalité");
            props.setWhoWon(null)
            break;
          // Scissors
          case 3:
            setWinner("Vous avez gagné");
            props.setWhoWon(0)
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
            props.setWhoWon(0)
            break;
          // Paper
          case 2:
            setWinner("L'IA a gagné");
            props.setWhoWon(1)
            break;
          // Scissors
          case 3:
            setWinner("Egalité");
            props.setWhoWon(null)
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
  };
  //!SECTION

  //ANCHOR - Render
  return (
    <Container className="Jeu">
      <div className="result text-center mb-5">
        <h1 className={winner == "-" ? "text-white" : null}>{winner}</h1>
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
                  variant="dark"
                  className="d-flex"
                  onClick={() => round(1)}
                >
                  {rock}
                </Button>
                <Button
                  variant="dark"
                  className="d-flex"
                  onClick={() => round(2)}
                >
                  {paper}
                </Button>
                <Button
                  variant="dark"
                  className="d-flex"
                  onClick={() => round(3)}
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
  );
}

export default Jeu;
