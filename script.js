'use strict';
// console.log(document.querySelector(`.message`).textContent);
// //DOM: document object model, it is created as soon as page is loaded and it is stored in a tree structure. Whatever there is in the html doc is also in dom structure. Dom methods and properties are not a part of js
// document.querySelector(`.message`).textContent = `Corect Number! 🎉`;
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;
// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(`.again`).disabled = true;
document.querySelector(`.highscore`).textContent = highScore;

function displayMessage(msg) {
  document.querySelector(`.message`).textContent = msg;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  //function is also a value so we can pass it in other functions too
  const guess = Number(document.querySelector(`.guess`).value); //event handler function
  document.querySelector(`.again`).disabled = false;
  if (score > 1) {
    //If no number is entered
    if (!guess) {
      displayMessage(`Correct Number!🎉`);
    }

    //if correct number is entered
    else if (guess === secretNumber) {
      displayMessage(`Correct number!🎉`);
      //   document.querySelector(`.message`).textContent = `Correct Number!🎉`;
      document.querySelector(`body`).style.backgroundColor = `#60b347`; //camelcase and string value in js for css
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.number`).style.width = `30rem`;

      if (highScore < score) {
        highScore = score;
        document.querySelector(`.highscore`).textContent = highScore;
      } else {
        document.querySelector(`.highscore`).textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? `Too high!📈` : `Too low!📉`);

      //   document.querySelector(`.message`).textContent =
      //     guess > secretNumber ? `Too high!📈` : `Too low!📉`;
      score--;
      document.querySelector(`.score`).textContent = score;
    }

    //     //too high
    //     else if (guess > secretNumber) {
    //       document.querySelector(`.message`).textContent = `Too high!📈`;
    //       score--;
    //       document.querySelector(`.score`).textContent = score;
    //     }

    //     //too low
    //     else {
    //       document.querySelector(`.message`).textContent = `Too low!📉`;
    //       score--;
    //       document.querySelector(`.score`).textContent = score;
    //     }
  }

  //game over
  else {
    displayMessage(`Game Over☠`);
    score = 0;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#F53649`;
  }
});

//Again button
document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  displayMessage(`Start guessing...`);
  score = 20;
  document.querySelector(`.score`).textContent = `20`;
  document.querySelector(`body`).style.backgroundColor = `#000`;
  document.querySelector(`.number`).style.width = `15rem`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
