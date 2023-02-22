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

      <Offcanvas show={show} onHide={handleClose} placement={"end"} backdrop={false} className="d-flex">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tableau des scores</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-center">
          <table>
            <thead>
                <tr className="d-flex justify-content-center gap-5">
                    <th>Joueur</th>
                    <th>IA</th>
                </tr>
            </thead>
            <tbody>
                <tr className="d-flex justify-content-between">
                    <td>{props.scorePlayer}</td>
                    <td>{props.scoreIA}</td>
                </tr>
            </tbody>
          </table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ScoreTable;
