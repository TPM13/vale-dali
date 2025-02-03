let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let title = document.querySelector('h1');
let yesButtonSize = 1;

// Array of phrases for the "No" button
const noPhrases = [
    "Are you sure?!?",
    "This isn't the yes button silly!",
    "I've got lunchbars:)",
    "I'll think about it!",
    "It's no longer funny click yes",
    "Might die if you don't click yes",
    "Getting real close to killing me",
    "I'm dead.",
    "Guess I gotta haunt you now lol :)",
    "YES."
];

let noPhraseIndex = 0; // To keep track of the current phrase
let lastPhrase = ""; // To store the last phrase used

noButton.addEventListener('click', function() {
    yesButtonSize += 0.1; // Increase size by 0.5 each time
    yesButton.style.transform = `scale(${yesButtonSize})`;
    
    // Check if we have more phrases to show
    if (noPhraseIndex < noPhrases.length) {
        // Change the text of the "No" button to a new phrase
        lastPhrase = noPhrases[noPhraseIndex]; // Store the current phrase
        noButton.textContent = lastPhrase;
        noPhraseIndex++; // Move to the next phrase
    } else {
        // If all phrases have been shown, repeat the last phrase
        noButton.textContent = lastPhrase;
    }
    
});

yesButton.addEventListener('click', function() {
    valentineImage.src = "yes.gif";
    title.textContent = "I Love You";  
    alert("I knew you wouldn't refuse");

    // Remove buttons
    yesButton.remove();
    noButton.remove();
});
