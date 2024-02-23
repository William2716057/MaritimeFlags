//wordlist
const words = ["boat", "navy", "waves", "storm", "hull", "helm", "galley"];

// Randomly choose a word from the list
function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to display the random word in the input box
function displayRandomWord() {
    const randomWord = generateRandomWord();
    document.getElementById("userInput").setAttribute("data-word", randomWord);
}

//match user input to randomly chosen word
function checkGuess() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const randomWord = document.getElementById("userInput").getAttribute("data-word");

    if (userInput === randomWord) {
        alert("Well done!");
    } else {
        alert("Incorrect!");
    }

    //choose new random word after attempt
    displayRandomWord();
}

//choose random word on page load
displayRandomWord();