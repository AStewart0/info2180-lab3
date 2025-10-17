window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  squares.forEach(square => {
    square.classList.add('square');
  });
});

let currentPlayer = 'X';

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  
  squares.forEach(square => {
    square.classList.add('square');
    
    square.addEventListener('click', () => {
      if (square.textContent === '') { // prevent overwriting
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
  });
});
