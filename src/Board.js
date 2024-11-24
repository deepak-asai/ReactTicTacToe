import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [gameState, setGameState] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState("x");

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        gameState[i][0] === gameState[i][1] &&
        gameState[i][0] === gameState[i][2]
      ) {
        setWinner(gameState[i][0]);
        return;
      } else if (
        gameState[0][i] === gameState[1][i] &&
        gameState[0][i] === gameState[2][i]
      ) {
        setWinner(gameState[0][i]);
        return;
      }
    }

    if (
      gameState[0][0] === gameState[1][1] &&
      gameState[1][1] === gameState[2][2]
    ) {
      setWinner(gameState[0][0]);
      return;
    }

    if (
      gameState[0][2] === gameState[1][1] &&
      gameState[1][1] === gameState[2][0]
    ) {
      setWinner(gameState[0][2]);
    }
  };

  const onButtonClick = (row, col, player) => {
    if (gameState[row][col] !== -1) {
      return;
    }

    const currentState = gameState;
    currentState[row][col] = player;
    setGameState(currentState);
    checkWinner();
    if (player === "x") {
      setPlayer("o");
    } else {
      setPlayer("x");
    }
  };

  return (
    <>
      {winner}
      {winner != null ?? <div>Winner is {winner}</div>}
      <div>
        <Square
          onButtonClick={onButtonClick}
          row={0}
          col={0}
          player={player}
          gameState={gameState}
        />
        <Square
          onButtonClick={onButtonClick}
          row={0}
          col={1}
          player={player}
          gameState={gameState}
        />
        <Square
          onButtonClick={onButtonClick}
          row={0}
          col={2}
          player={player}
          gameState={gameState}
        />
      </div>
      <div>
        <Square
          onButtonClick={onButtonClick}
          row={1}
          col={0}
          player={player}
          gameState={gameState}
        />
        <Square
          onButtonClick={onButtonClick}
          row={1}
          col={1}
          player={player}
          gameState={gameState}
        />
        <Square
          onButtonClick={onButtonClick}
          row={1}
          col={2}
          player={player}
          gameState={gameState}
        />
      </div>
      <div>
        <Square
          onButtonClick={onButtonClick}
          row={2}
          col={0}
          player={player}
          gameState={gameState}
        />
        <Square
          onButtonClick={onButtonClick}
          row={2}
          col={1}
          player={player}
          gameState={gameState}
        />
        <Square
          onButtonClick={onButtonClick}
          row={2}
          col={2}
          player={player}
          gameState={gameState}
        />
      </div>
    </>
  );
}
