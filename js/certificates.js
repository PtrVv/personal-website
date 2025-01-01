const container = document.querySelector('.certificates-container');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let isMouseDown = false;  // Flag to track if mouse button is held down
let startX;               // Track starting position of the mouse
let scrollLeft;           // Track how much we've scrolled

// Button-based scrolling
next.addEventListener('click', () => {
    container.scrollBy({ left: 200, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
    container.scrollBy({ left: -200, behavior: 'smooth' });
});

// Mouse hold-based scrolling
container.addEventListener('mousedown', (e) => {
    if (e.button === 0) {  // Left click only (button 0 is left click)
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;  // Get the starting X position
    scrollLeft = container.scrollLeft;        // Get the initial scroll position
    container.style.cursor = 'grabbing';       // Change cursor to indicate dragging
    }
});

container.addEventListener('mouseleave', () => {
    isMouseDown = false;
    container.style.cursor = 'grab';  // Reset cursor when mouse leaves the container
});

container.addEventListener('mouseup', () => {
    isMouseDown = false;
    container.style.cursor = 'grab';  // Reset cursor when mouse is released
});

container.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; // Only scroll if the mouse button is held down
    e.preventDefault();  // Prevent default dragging behavior

    const x = e.pageX - container.offsetLeft;  // Get current mouse X position
    const walk = (x - startX) * 2;              // Calculate how far we've moved
    container.scrollLeft = scrollLeft - walk;   // Update scroll position based on movement
});