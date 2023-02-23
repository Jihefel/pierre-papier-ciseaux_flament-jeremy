import React, { useState, useEffect } from "react";
import {Offcanvas, Button} from 'react-bootstrap';

function ScoreTable(props) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(!show)
};

  return (
    <>
      <Button variant="success" onClick={handleShow} className={"openTable"}>
        {show ? "Fermer le tableau des scores" : "Afficher le tableau des scores" }
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={"end"} backdrop={false} className="d-flex" enforceFocus={false} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tableau des scores</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-center">
          <table>
            <thead>
                <tr className="d-flex justify-content-between gap-5">
                    <th>J1</th>
                    <th>J2</th>
                    <th>Mode</th>
                </tr>
            </thead>
            <tbody>
              {[...Array(props.gameId)].map((id, index) => (
                <tr key={index} className="d-flex justify-content-around w-100">
                  <td>{props.scorePlayer1}</td>
                  <td>{props.scorePlayer2}</td>
                  <td>{props.gameMode === 1 ? "J vs IA" : props.gameMode === 2 ? "J vs J" : props.gameMode === 3 ?"IA vs IA": ""}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ScoreTable;
