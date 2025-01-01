const bubbleBox = document.getElementById("bubble-box");
const text = "Hello! My name is Petar Vasilev and I am a Software Engineer specializing in Python development.";
let index = 0;

function typeText() {
  if (index < text.length) {
    bubbleBox.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 50); // Adjust typing speed (in ms)
  }
}

// Clear the bubble and start typing when hovering
document.querySelector(".man-programming").addEventListener("mouseenter", () => {
  bubbleBox.textContent = ""; // Clear any existing text
  index = 0; // Reset typing index
  typeText(); // Start typing effect
});

// Hide bubble when mouse leaves (optional, resets the text)
document.querySelector(".man-programming").addEventListener("mouseleave", () => {
  bubbleBox.textContent = ""; // Optionally reset the bubble
  index = 0;
});