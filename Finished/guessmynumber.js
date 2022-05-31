/*
You are going to try to build a Guess My Number game with JavaScript

----------

The essence of this game is that computer randomly guesses some number and a player 
// has to guess it with limited number of guesses. 

----------
Requirements:
- game should generate a random number in a given range (1-100, for example)
- player should be told the range of possible numbers and how many guesses they have
- game should display a prompt with input field for a number
- after each guess game should tell:
- number is too big (if the number from user is greater than the guessed number)
- number is too small (if the number is smaller than the guessed number)
- If player could guess the number than the game should give a message about that and 
  render text/image confirming the win
- if player couldn’t guess the number with given amount of guesses then the game stops 
  and tells the number which was guessed
----------
*/
let guessMyNumber = () => {
  let number = Math.floor(Math.random() * 50) + 1;
  let guesses = 10;
  for (i = 0; i < 10; i++) {
    let answer = prompt(
      `Insert a number between 1 and 50. You have ${guesses} lives!`
    );
    if (Number(answer) == number) {
      if (10 - guesses == 0) return alert("You amazing! First try correct!");
      else return alert(`Congratulation, you won at your ${10 - guesses} try!`);
    } else if (answer === null) return alert("You cancelled a game!");
    else if (isNaN(Number(answer)) == true || answer == 0 || answer > 50) {
      alert(
        "Incorrect Input! Confirm to go to next round and remember that only numbers 1-50 are correct!"
      );
      i--;
    } else if (Number(answer) != number && isNaN(Number(answer)) == false) {
      guesses--;
      if (guesses < 1) return alert("You are out of lives....You lost!");
      if (Number(answer) > number)
        alert("Too high! Confirm to go to next round");
      else if (Number(answer) < number)
        alert("Too low! Confirm to go to next round");
    }
  }
};
guessMyNumber();

