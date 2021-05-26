const display = document.querySelector('#display');
const score = document.querySelector('#score');
const addOnePlayerOne = document.querySelector('#addOnePlayerOne');
const addOnePlayerTwo = document.querySelector('#addOnePlayerTwo');
const reset = document.querySelector('#reset');
const playingTo = document.querySelector(`#score`);
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
let playerOneScore = 0;
let playerTwoScore = 0;
let targetScore = 1;

playingTo.addEventListener('change', (event) => {
  resetScore();
  targetScore = Number(event.target.value);
});

addOnePlayerOne.addEventListener('click', (event) => {
  event.preventDefault();
  playerScore(event.target.id);
  console.log(playerOneScore, targetScore);
});

addOnePlayerTwo.addEventListener('click', (event) => {
  event.preventDefault();
  playerScore(event.target.id);
});

reset.addEventListener('click', (event) => {
  event.preventDefault();
  resetScore();
});

const createOptions = (playingTo) => {
  for (let idx = 1; idx <= 100; idx += 1) {
    let option = document.createElement('option');
    option.value = idx;
    option.innerText = idx;
    playingTo.append(option);
  }
};

const playerScore = (player) => {
  if (player === 'addOnePlayerOne' && playerOneScore === targetScore) {
    alert('Player One is the Winner!!!');
  } else if (player === 'addOnePlayerOne') {
    playerOneScore += 1;
    playerOne.innerText = playerOneScore.toString();
    if (playerOneScore === targetScore) {
      alert('Player One is the Winner!!!');
    }
  }
  if (player === 'addOnePlayerTwo' && playerTwoScore === targetScore) {
    alert('Player Two is the Winner!!!');
  } else if (player === 'addOnePlayerTwo') {
    playerTwoScore += 1;
    playerTwo.innerText = playerTwoScore.toString();
    if (playerTwoScore === targetScore) {
      alert('Player Two is the Winner!!!');
    }
  }
};

const resetScore = () => {
  playerOneScore = 0;
  playerOne.innerText = playerOneScore.toString();
  playerTwoScore = 0;
  playerTwo.innerText = playerTwoScore.toString();
};

createOptions(playingTo);
