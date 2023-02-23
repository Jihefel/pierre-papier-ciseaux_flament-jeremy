import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function ModeChoice(props) {

    const chooseMode = (e) => {
      props.setModeSetted(true)
      switch (e.target.value) {
        case "1":
            props.setGameMode(1)
            break;
        case "2":
            props.setGameMode(2)
            break;
      
        default:
            break;
      }
    }

  return (
    <div className="text-center">
      <label htmlFor="mode" className="fs-1 text-white">
        Choisissez votre mode de jeu
      </label>
      <Form.Select aria-label="Default select example" size="lg" defaultValue={"default"} onChange={chooseMode}>
        <option disabled value='default'></option>
        <option value="1">Joueur vs. IA</option>
        <option value="2">Joueur vs. Joueur</option>
      </Form.Select>
    </div>
  );
}

export default ModeChoice;
