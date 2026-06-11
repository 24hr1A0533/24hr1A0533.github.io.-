
function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);