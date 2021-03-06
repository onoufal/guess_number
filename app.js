'use strict';

let highscore = 0;
let scoreNum = 20;
let secretNum = Math.trunc(Math.random() * 20 + 1);
let check = document.querySelector('.check');



check.addEventListener('click', eventHandlar);

function displayMessage(message) {
  let messageEl = document.querySelector('.message');
  messageEl.textContent = message
}

function eventHandlar() {
  let guess = Number(document.querySelector('.guess').value);
  let score = document.querySelector('.score');

  if (!guess) {
    displayMessage('⛔ No Number!');

  } else if (guess === secretNum) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (scoreNum > highscore) {
      document.querySelector('.highscore').textContent = scoreNum;
    }
  }

  else if (guess !== secretNum) {

    if (scoreNum > 1) {
      displayMessage(guess > secretNum ? '🔽Too high!' : '🔼Too low');
      scoreNum--
      score.textContent = scoreNum
    } else {
      displayMessage('💥You lost the game!')
      scoreNum--
      score.textContent = 0
    }
  }
}



let againBt = document.querySelector('.again');



againBt.addEventListener('click', eventHandlar1)

function eventHandlar1() {
  secretNum = Math.trunc(Math.random() * 20 + 1);
  scoreNum = 20;
  displayMessage('Start guessing...')
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ""
  document.querySelector('.score').textContent = scoreNum
  document.querySelector('body').style.backgroundColor = '#222';
}
