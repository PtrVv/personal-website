document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.getElementById("home");
  const bubbleBox = document.getElementById("bubble-box");
  const manProgramming = document.querySelector(".man-programming");

  const introductionText = "Hello! My name is Petar Vasilev. I am a Software Developer specializing in Python.";

  let typingIndex = 0;

  // Function to type out the text in the bubble box
  function typeText() {
    if (typingIndex < introductionText.length) {
      bubbleBox.textContent += introductionText.charAt(typingIndex);
      typingIndex++;
      setTimeout(typeText, 50); // Adjust typing speed by changing the timeout
    }
  }

  // Observer to detect when the home section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start glowing effect
          manProgramming.classList.add("glow");

          // Start typing the text
          bubbleBox.style.opacity = 1; // Make the bubble box visible
          typeText();

          // Disconnect observer after triggering
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  // Add the observer to the home section
  observer.observe(homeSection);

  // CSS class for glowing effect
  manProgramming.addEventListener("animationend", () => {
    manProgramming.classList.remove("glow"); // Optional: Remove the glow after animation
  });
});
