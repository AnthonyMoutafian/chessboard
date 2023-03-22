// create an 8x8 grid for the chessboard
const boardSize = 8;
const chessboard = document.querySelector('.chessboard');

for (let row = 0; row < boardSize; row++) {
  for (let col = 0; col < boardSize; col++) {
    const square = document.createElement('div');
    square.classList.add('square');
    if ((row + col) % 2 === 0) {
      square.classList.add('light');
    } else {
      square.classList.add('dark');
    }
    chessboard.appendChild(square);
  }
}
