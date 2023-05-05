// Define a function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  // Define a function to check if the user's guess is correct
  function checkGuess(guess) {
    if (guess === randomNumber) {
      return true;
    } else {
      return false;
    }
  }
  
  // Define a function (closure) to keep track of the number of attempts
  function incrementAttempts() {
    let numAttempts = 0;
    return function () {
      // return numAttempts++;
      return ++numAttempts;
    };
  }
  
  // Define a function to handle the user's guess
  function handleGuess() {
    // Get the user's guess and the random number
    const guess = parseInt(prompt("Guess a number between 1 and 10"));
    const numberOfGuesses = countAttempts();
    console.log({ guess, randomNumber, numberOfGuesses });
  
    // Check if the guess is correct and update the output
    if (checkGuess(guess)) {
      alert(
        `Yay! You guessed the number in ${numberOfGuesses} tries. The number is ${randomNumber}`
        // TODO: The game continues and the values of randomNumber and numberOfGuesses are not reset
        // Ask the students how we can refactor the code to improve the game
      );
    } else {
      alert(`Hmmm. Let's try again!`);
      // recursion
      handleGuess();
    }
  }
  
  // Start the game
  
  // Generate a random number and set the number of attempts to 0
  const randomNumber = generateRandomNumber();
  const countAttempts = incrementAttempts();
  
  // Add an event listener to the button that calls the guess handler function when clicked
  document.querySelector("button").addEventListener("click", handleGuess);
  
  // Supplemental notes:
  
  // In JavaScript, ++i and i++ are both increment operators, but they behave differently.
  // ++i is the pre-increment operator, which means that it increments the value of i by 1 before the value is used in an expression. For example, if i is initially 3, ++i would return 4 and update the value of i to 4.
  // On the other hand, i++ is the post-increment operator, which means that it increments the value of i by 1 after the value is used in an expression. For example, if i is initially 3, i++ would return 3 and update the value of i to 4.
  // Here's an example to illustrate the difference between the two:
  
  let i = 3;
  let x = ++i;
  console.log(i); // Output: 4
  console.log(x); // Output: 4
  
  let j = 3;
  let y = j++;
  console.log(j); // Output: 4
  console.log(y); // Output: 3
  
  // In the first example, ++i increments i to 4 and assigns the value of 4 to x. In the second example, j++ assigns the value of 3 to y and then increments j to 4.
  ```
  