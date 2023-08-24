import './App.css';
import NumberSquare from "./NumberSquare";

function App() {
  const boardSize = 33 * 33;
  const savedData = localStorage.getItem("board");
  let boardData;

  if (savedData != null) {
    boardData = JSON.parse(savedData);
  } else {
    boardData = new Array(boardSize).fill('');
  }

  const nbSquares = boardData.map((value, index) => {
    return (<NumberSquare
      key={"square_" + index}
      index={index}
      bindTo={boardData}
      onChange={onNumberChange}
    />);
  });

  function onNumberChange(event) {
    const index = event.target.dataset.index;
    boardData[index] = event.target.value;
    SaveBoard();
  }

  function SaveBoard() {
    localStorage.setItem("board", JSON.stringify(boardData));
  }

  return (
    <div className="App">
      <div className="board">
        <div className="board-background"></div>
        <div className="board-grid">
          {nbSquares}
        </div>
      </div>
    </div>
  );
}

export default App;
