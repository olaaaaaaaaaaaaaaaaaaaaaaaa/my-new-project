import React, { useState } from 'react';
import Field from './Field';
import Information from './Information';
import styles from './Field.module.css';

function App() {
  const [field, setField] = useState(Array(9).fill(''));
  const [currentPlayer, setСurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handleCellClick = (index) => {
    if (!field[index] && !isGameEnded) {
      const cloneField = [...field];

      cloneField[index] = currentPlayer;
      setСurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
      setField(cloneField);
      /*Winner*/
      checkWinner(cloneField, currentPlayer);
    }
  };

  const checkWinner = (field, currentPlayer) => {
    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Варианты побед по горизонтали
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Варианты побед по вертикали
      [0, 4, 8],
      [2, 4, 6], // Варианты побед по диагонали
    ];

    for (let abc of WIN_PATTERNS) {
      const [a, b, c] = abc;
      if (
        field[a] === currentPlayer &&
        field[b] === currentPlayer &&
        field[c] === currentPlayer
      ) {
        setIsGameEnded(true);
        return;
      }
    }

    if (field.every((cell) => cell !== '')) {
      setIsDraw(true);
    }
  };

  const replay = () => {
    setField(Array(9).fill(''));
    setСurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
  };

  return (
    <>
      <Field array={field} handleCellClick={handleCellClick} />
      <button className={styles.btn} onClick={replay}>
        restart
      </button>

      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
    </>
  );
}

export default App;
