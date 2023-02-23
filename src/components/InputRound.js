import { Button, InputGroup, Form } from "react-bootstrap";

function InputRound(props) {
    return (
      <div className="question text-center">
        <Form.Label htmlFor="rounds" className="fs-1 text-white">
          Combien de rounds voulez-vous jouer ? (max 100)
        </Form.Label>
        <InputGroup className="champs w-25 mx-auto mt-4">
          <Form.Control
            type="number"
            id="rounds"
            min={1}
            max={100}
            value={props.nbRound}
            onChange={(e) => props.setNbRound(parseInt(e.target.value))}
          />
          <Button onClick={props.validateRounds} variant="success">
            Valider
          </Button>
        </InputGroup>
      </div>
    );
  }

export default InputRound;