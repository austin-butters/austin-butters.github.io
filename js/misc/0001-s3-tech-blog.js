// Adds an event listener to the button, when clicked it will run the changeButtonText() function.
function windowLoaded() {
  document.getElementById('clickMe').addEventListener('click', changeButtonText)
}

// Changes the button's .innerHTML to "I've been clicked!"
function changeButtonText() {
  document.getElementById('clickMe').innerHTML = "I've Been Clicked!"
}

// Runs the windowLoaded() function when the window loads
window.onload = windowLoaded
