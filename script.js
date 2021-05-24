const display = document.querySelector('#display');
const score = document.querySelector('#score');
const player1score = document.querySelector('#player1score');
const player2score = document.querySelector('#player2score');
const reset = document.querySelector('#reset');

player1score.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});
player2score.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});
reset.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});
