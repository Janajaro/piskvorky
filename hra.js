let currentPlayer = 'circle';

const selectPole = (event) => {
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
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectPole);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectPole);
