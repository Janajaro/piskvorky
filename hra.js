import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const allButtonsSelection = document.querySelectorAll('.pole');

const selectPole = async (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document.querySelector('.kolecko-white').src = 'cross-white.svg';
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document.querySelector('.kolecko-white').src = 'circle-white.svg';
  }

  const gameField = Array.from(document.querySelectorAll('.pole')).map(
    (htmlButton) => {
      if (htmlButton.classList.contains('board__field--cross')) {
        return `x`;
      } else if (htmlButton.classList.contains('board__field--circle')) {
        return `o`;
      } else {
        return `_`;
      }
    },
  );

  const winner = findWinner(gameField);
  if (winner === 'o') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 500);
  } else if (winner === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 500);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Oba jste looseři! Zahrajte si znovu!');
      location.reload();
    }, 500);
  }

  if (currentPlayer === 'cross') {
    // spustí se pouze v případě, že je na tahu počítač
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: gameField,
          player: 'x', // počítač hraje jako 'x'
        }),
      },
    );
    const data = await response.json();
    const { x, y } = data.position;
    const field = allButtonsSelection[x + y * 10];
    field.click();
  }
};

allButtonsSelection.forEach((button) => {
  button.addEventListener('click', selectPole);
});
