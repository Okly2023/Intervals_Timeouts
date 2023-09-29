//1.
function typewriterEffect() {
  const word = "Keller";
  let index = 0;

  const intervalId = setInterval(function() {
    // Check if all letters have been displayed
    if (index < word.length) {
      // Display one letter at a time
      console.log(word[index]);
      index++;
    } else {
      // Clear the interval once all letters are displayed
      clearInterval(intervalId);
      console.log("Typewriter effect finished!"); // Add a message for confirmation
    }
  }, 1000); // Delay of 1000 milliseconds (1 second) between each letter
}

// Call the function to start the typewriter effect
typewriterEffect();


//2.

let secondsPassed = 0;
const timerElement = document.getElementById("timer");

function updateTimer() {
  if (secondsPassed < 60) {
    timerElement.textContent = secondsPassed + " seconds have passed";
  } else {
    const minutes = Math.floor(secondsPassed / 60);
    timerElement.textContent = minutes + " minute" + (minutes > 1 ? "s" : "") + " have passed";
  }
  secondsPassed++;
}

setInterval(updateTimer, 1000);

