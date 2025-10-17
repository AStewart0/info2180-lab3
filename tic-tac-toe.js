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

        if (checkWinner()) return;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });

    square.addEventListener('mouseover',() => { 
        square.classList.add('hover');

    });

    square.addEventListener('mouseout',() => {
        square.classList.remove('hover');
    });
  });
});

function checkWinner() {
  const squares = Array.from(document.querySelectorAll('#board div'));
  const combos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];

  for (let combo of combos) {
    const [a,b,c] = combo;
    if (squares[a].textContent &&
        squares[a].textContent === squares[b].textContent &&
        squares[a].textContent === squares[c].textContent) {
      const winner = squares[a].textContent;
      const status = document.getElementById('status');
      status.textContent = `Congratulations! ${winner} is the Winner!`;
      status.classList.add('you-won');
      return true;
    }
  }
  return false;
}
