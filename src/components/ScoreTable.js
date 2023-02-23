import React, { useState, useEffect } from "react";
import { Offcanvas, Button } from "react-bootstrap";

function ScoreTable(props) {
  const [show, setShow] = useState(false);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [gameMode, setGameMode] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (props.gameId === 1) {
      setScorePlayer1(props.scorePlayer1);
      setScorePlayer2(props.scorePlayer2);
      setGameMode(props.gameMode);
    } else {
      const lastScore = props.scoresTable[props.scoresTable.length - 1];
      setScorePlayer1(lastScore[0]);
      setScorePlayer2(lastScore[1]);
      setGameMode(lastScore[2]);
    }
  }, [
    props.gameId,
    props.scorePlayer1,
    props.scorePlayer2,
    props.gameMode,
    props.scoresTable,
  ]);

  return (
    <>
      <Button variant="success" onClick={handleShow} className={"openTable"}>
        {show
          ? "Fermer le tableau des scores"
          : "Afficher le tableau des scores"}
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        backdrop={false}
        className="d-flex"
        enforceFocus={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tableau des scores</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-center">
          <table className="w-75">
            <thead>
              <tr className="d-flex justify-content-between gap-5">
                <th>J1</th>
                <th>J2</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {props.scoresTable.map((row, index) => (
                <tr key={index} className="d-flex justify-content-between">
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>
                    {row[2] === 1
                      ? "J vs IA"
                      : row[2] === 2
                      ? "J vs J"
                      : row[2] === 3
                      ? "IA vs IA"
                      : ""}
                  </td>
                </tr>
              ))}
              {[...Array(props.gameId - props.scoresTable.length)].map(
                (id, index) => (
                  <tr
                    key={props.scoresTable.length + index}
                    className="d-flex justify-content-between"
                  >
                    <td>{props.scorePlayer1}</td>
                    <td>{props.scorePlayer2}</td>
                    <td>
                      {props.gameMode === 1
                        ? "J vs IA"
                        : props.gameMode === 2
                        ? "J vs J"
                        : props.gameMode === 3
                        ? "IA vs IA"
                        : ""}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ScoreTable;
