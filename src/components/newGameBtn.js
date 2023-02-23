import { Button } from 'react-bootstrap';

function NewGameBtn(props) {
    return (
      <Button size="lg" variant="danger" onClick={props.newGame}>
        Nouvelle partie
      </Button>
    );
  }

export default NewGameBtn