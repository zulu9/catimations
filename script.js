// JavaScript for interactive emoji trace on the cat image

const catImage = document.getElementById("cat-image");
let isDragging = false;

// List of random emojis
const emojis = ["❤️", "✨", "🌟", "💫", "⭐", "🔥"];

// Function to create an emoji at the specified position
function createEmoji(x, y) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = x + "px";
    emoji.style.top = y + "px";
    document.getElementById("cat").appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => {
        emoji.remove();
    }, 1000);
}

// Start dragging
catImage.addEventListener("mousedown", function(event) {
    isDragging = true;
    createEmoji(event.offsetX, event.offsetY); // Create an emoji on initial click
});

// Stop dragging
document.addEventListener("mouseup", function() {
    isDragging = false;
});

// Prevent default image dragging
catImage.addEventListener("dragstart", function(event) {
    event.preventDefault();
});

// Create emoji trace on mouse move when dragging
catImage.addEventListener("mousemove", function(event) {
    if (isDragging) {
        createEmoji(event.offsetX, event.offsetY);
    }
});
