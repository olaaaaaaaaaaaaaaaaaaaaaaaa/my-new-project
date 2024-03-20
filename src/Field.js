/*import { useState } from 'react';*/
import styles from './Field.module.css';
import React from 'react';

const Field = ({ array, handleCellClick }) => {
  return (
    <div className={styles.board}>
      {array.map((element, index) => (
        <button
          className={styles.square}
          key={index}
          onClick={() => handleCellClick(index)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};
export default Field;
