function WinnerAnnounce(props) {
  return (
    <div className="result text-center mb-5">
      <h1
        className={
          (props.winner === "-" ? "opacity-0 " : "") +
          " display-1 fw-bolder pb-5 text-warning"
        }
      >
        {props.winner == "Egalité"
          ? "Egalité à la manche " + (props.roundId - 1)
          : props.winner + " la manche " + (props.roundId - 1)}
      </h1>
    </div>
  );
}

export default WinnerAnnounce;