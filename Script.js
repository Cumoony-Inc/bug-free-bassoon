let targetNumber, attempts, minRange, maxRange;

function newGame() {
    attempts = 0;
    minRange = 1;
    maxRange = 100;
    targetNumber = generateRandomNumber(minRange, maxRange);

    document.getElementById("minRange").textContent = minRange;
    document.getElementById("maxRange").textContent = maxRange;
    setMessage("Guess a number between " + minRange + " and " + maxRange + ":");
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").disabled = false;
    document.getElementsByTagName("button")[0].disabled = false;
    document.getElementById("attempts").textContent = "";
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess() {
    const userInput = parseInt(document.getElementById("userInput").value);
    attempts++;

    if (isNaN(userInput) || userInput < minRange || userInput > maxRange) {
        setMessage("Please enter a valid number between " + minRange + " and " + maxRange + ".");
    } else if (userInput === targetNumber) {
        setMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        document.getElementById("userInput").disabled = true;
        document.getElementsByTagName("button")[0].disabled = true;
        document.getElementById("attempts").textContent = "Attempts: " + attempts;
    } else if (userInput < targetNumber) {
        setMessage("Try a higher number.");
    } else {
        setMessage("Try a lower number.");
    }

    giveHint();
}

function setMessage(message) {
    document.getElementById("message").textContent = message;
}

function giveHint() {
    const hintMessage = targetNumber % 2 === 0 ? "The number is even." : "The number is odd.";
    setMessage(`${hintMessage} ${document.getElementById("message").textContent}`);
}

newGame(); // Start a new game when the page loads
