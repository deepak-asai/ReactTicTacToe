export default function Square(props) {
  const { onButtonClick, row, col, gameState, player } = props;
  return (
    <>
      <button
        className="square"
        onClick={() => onButtonClick(row, col, player)}
      >
        {gameState[row][col] !== -1 ? gameState[row][col] : "f"}
      </button>
    </>
  );
}
