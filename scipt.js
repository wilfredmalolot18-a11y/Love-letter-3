
// Get the envelope
let envelope = document.getElementById("envelope");

// Get the buttons
let openButton = document.getElementById("openButton");
let closeButton = document.getElementById("closeButton");

// Function to open the letter
function openLetter() {

    // Add the open class
    envelope.classList.add("open");

    // Hide the open button
    openButton.style.display = "none";

    // Show the close button
    closeButton.style.display = "inline-block";
}

// Function to close the letter
function closeLetter() {

    // Remove the open class
    envelope.classList.remove("open");

    // Show the open button
    openButton.style.display = "inline-block";

    // Hide the close button
    closeButton.style.display = "none";
}
