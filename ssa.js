// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create a new div element
    var div = document.createElement('div');

    // Apply styles directly using JavaScript
    div.style.position = 'fixed'; // Ensure the div covers the viewport
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.zIndex = '-1'; // Put it behind other content

    // Set the background image and other properties
    div.style.backgroundImage = 'url("ripindra.png")';
    div.style.backgroundSize = 'cover'; // Ensure the image covers the entire div
    div.style.backgroundPosition = 'center'; // Center the image
    diveat = 'no-repeat'; // Prevent image repetition

    // Append the div to the body of the document
    document.body.appendChild(div);