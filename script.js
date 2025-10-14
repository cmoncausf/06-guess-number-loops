document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  // Variable to track if the player guessed correctly
  let guessedCorrectly = false;

  // Use a for loop to give the player 5 attempts
  for (let attempts = 1; attempts <= 5; attempts++) {
    // Ask the player for their guess
    const guess = prompt('Guess a number between 1 and 10:');

    // If the player cancels the prompt, stop the game
    if (guess === null) {
      document.getElementById('message').textContent = 'Game cancelled.';
      return;
    }

    // Convert the guess to a number
    const guessNumber = Number(guess);

    // Check if the guess is correct
    if (guessNumber === secretNumber) {
      // Show a congratulatory message with the number of attempts
      document.getElementById('message').textContent =
        `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
      guessedCorrectly = true;
      break;
    } else if (guessNumber < secretNumber) {
      // Give a hint if the guess is too low
      alert('Too low! Try again.');
    } else if (guessNumber > secretNumber) {
      // Give a hint if the guess is too high
      alert('Too high! Try again.');
    } else {
      // Handle invalid input
      alert('Please enter a valid number between 1 and 10.');
    }
  }

  // If the player did not guess correctly after 5 attempts, show game over message
  if (!guessedCorrectly) {
    document.getElementById('message').textContent =
      `❌ Game over! The number was ${secretNumber}.`;
  }
});