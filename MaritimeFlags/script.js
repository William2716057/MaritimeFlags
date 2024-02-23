//wordlist
const words = ["boat", "navy", "waves", "storm", "hull", "helm", "galley"];

// Randomly choose a word from the list
function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to display the random word in the input box and corresponding flag images
function displayRandomWord() {
    const randomWord = generateRandomWord();
    document.getElementById("userInput").setAttribute("data-word", randomWord);
    displayWordImages(randomWord);
}

// Function to display images for each letter of the word
function displayWordImages(word) {
    const imagesContainer = document.getElementById("imagesContainer");
    imagesContainer.innerHTML = ""; // Clear previous images

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toUpperCase();
        const img = document.createElement("img");
        img.src = `flags/${letter}.jpg`;
        img.alt = letter;
        img.classList.add("letter-image");
        imagesContainer.appendChild(img);
    }
}

//match user input to randomly chosen word
function checkGuess() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const randomWord = document.getElementById("userInput").getAttribute("data-word");

    if (userInput === randomWord) {
        alert("Well done!");
    } else {
        alert("Try again!");
    }

    //choose new random word after attempt
    displayRandomWord();
}

//choose random word on page load
displayRandomWord();