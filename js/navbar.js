document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section"); // All sections on the page
  const navLinks = document.querySelectorAll(".navbar a"); // Navbar links
  
  // Remove active class from all navbar links
  function removeActiveClass() {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  // Function to add active class based on the section in view
  function setActiveNavLink(entries, observer) {
    entries.forEach((entry) => {
      const sectionId = entry.target.id; // Get the ID of the section in view
      const link = document.getElementById(`${sectionId}Link`); // Select corresponding navbar link
      
      if (entry.isIntersecting) {
        removeActiveClass(); // Remove 'active' from other navbar items
        link.classList.add("active"); // Add 'active' to the current link
      }
    });
  }

  // Observer to watch sections
  const observer = new IntersectionObserver(setActiveNavLink, {
    threshold: 0.5 // Trigger when 50% of the section is visible
  });

  // Observe each section
  sections.forEach((section) => observer.observe(section));
});
