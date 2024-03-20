export function calculateWinner(array) {
  // Возможные комбинации выигрыша в игре
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Проверяем все возможные комбинации
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (array[a] && array[a] === array[b] && array[a] === array[c]) {
      // Если все три значения в массиве равны и не равны пустой строке, возвращаем символ победителя
      return array[a];
    }
  }

  // Если нет победителя, возвращаем null
  return null;
}
