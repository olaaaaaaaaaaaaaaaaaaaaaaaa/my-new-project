import React from 'react';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div>
      {isGameEnded && !isDraw && <p>Победа: {currentPlayer}</p>}
      {!isGameEnded && isDraw && <p>Ничья!</p>}
      {!isGameEnded && !isDraw && <p>Ходит: {currentPlayer}</p>}
    </div>
  );
};
export default Information;
