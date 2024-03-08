// script.js

// Get the button and dropdown content
var button = document.getElementById("dropdown-btn");
var dropdownContent = document.getElementById("dropdown-content");

// Toggle the dropdown menu when the button is clicked
button.addEventListener("click", function() {
  // Toggle the display property of the dropdown content
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

