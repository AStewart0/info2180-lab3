window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');

  const status = document.getElementById('status');

  const newGameButton = document.querySelector('.btn');

  let currentPlayer = 'X';

  let gameOver = false;

  squares.forEach(square => {
    square.classList.add('square');

    square.addEventListener('click', () => {
      if (!gameOver && square.textContent === '') {
        square.textContent = currentPlayer;

        square.classList.add(currentPlayer);

        if (checkWinner()) {
          gameOver = true; 
          return;          
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });

    // === Exercise 3: Add hover effect ===
    square.addEventListener('mouseover', () => {
      square.classList.add('hover'); 
    });

    square.addEventListener('mouseout', () => {
      square.classList.remove('hover'); 
    });
  });

  // === Exercise 5: Restart the game when "New Game" is clicked ===
  newGameButton.addEventListener('click', () => {
    squares.forEach(square => {
      square.textContent = '';      
      square.classList.remove('X', 'O'); 
    });

    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won');

    currentPlayer = 'X';
    gameOver = false;
  });
});

// === Exercise 4 Helper: Function to check for winner ===
function checkWinner() {
  const squares = Array.from(document.querySelectorAll('#board div'));

  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (let combo of combos) {
    const [a, b, c] = combo;

    if (
      squares[a].textContent &&
      squares[a].textContent === squares[b].textContent &&
      squares[a].textContent === squares[c].textContent
    ) {

      const winner = squares[a].textContent;


      const status = document.getElementById('status');
      status.textContent = `Congratulations! ${winner} is the Winner!`;
      status.classList.add('you-won');

      return true; 
    }
  }

  return false; 
}
